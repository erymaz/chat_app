import React, { useContext, useEffect, useState } from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonStyles} from '@commons';
import {styles} from './style';
import UserCard from '../../../components/UserCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageStackParamList } from '@navigation/MessageStack';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '../../../components/SearchInput';
import { ChatContext, UserContext } from '@contexts';
import { UserModel } from '@models';
import firestore from '@react-native-firebase/firestore';
import { COLLECTION_CHANNELS, COLLECTION_CONNECTS } from '@config';

type Props = NativeStackScreenProps<MessageStackParamList, 'CreateChannelScreen'>;

const CreateChannelScreen: React.FC<Props> = () => {

  const navigation = useNavigation();
  const { user, users } = useContext(UserContext)
  const { connects } = useContext(ChatContext)
  const [filters, setFilters] = useState<UserModel[]>([])
  const [searchText, setSearchText] = useState<string>('')
  const [checkIndex, setCheckIndex] = useState<number>(-1)

  useEffect(() => {
    console.log(users)

  }, [])
  useEffect(() => {
    if(searchText.length < 1) {
      setFilters([])
    } else {
      let filters: UserModel[] = []
      // console.log(users)
      users.forEach((u) => {
        if(!u.username.toLowerCase().includes(searchText.toLowerCase())) {
          return
        }

        // console.log(u)

        let alreadyConnected = false
        connects.forEach((c) => {
          // console.log("c.users.includes(user.userId)", searchText, u.userId, c.users, c.users.includes(u.userId))
          if(c.users.includes(u.userId)) {
            alreadyConnected = true
          }
        })

        if(!alreadyConnected) {
          filters.push(u)
        }
      })

      setFilters(filters)
    }
    setCheckIndex(-1)
  }, [searchText])

  const renderItem = ({item, index}: {item: UserModel, index: number}) => {

    const onValueChange = (checked: boolean) => {
      if(checked) {
        setCheckIndex(index)
      }
    }
    
    return (
      <UserCard 
        picture={item.avatar}
        value={index == checkIndex}
        onValueChange={onValueChange}
        name={item.username}
      />
    )

  }

  const onCancel = () => {
    navigation.goBack()
  }

  const onCreate = async () => {
    if(!user || user.userId.length < 1 || checkIndex < 0) {
      return
    }

    const channelDoc = firestore()
      .collection(COLLECTION_CHANNELS)
      .doc()

    await channelDoc
      .set({
        channelId: channelDoc.id,
        messages: []
      })
    
    const connectDoc = firestore()
      .collection(COLLECTION_CONNECTS)
      .doc()
    
    await connectDoc.set({
      connectId: connectDoc.id,
      channelId: channelDoc.id,
      users: [user.userId, filters[checkIndex].userId],
      lastMessageAt: new Date().getTime()
    })
    
    navigation.goBack()
    navigation.navigate('ChatScreen', {connectId: connectDoc.id, channelId: channelDoc.id})
  }

  const HeaderComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity
              onPress={onCancel}
            >
              <Text style={styles.headerActionText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.headerTitleText}>
              New message
            </Text>
          </View>

          <TouchableOpacity
              onPress={onCreate}
            >
              <Text style={styles.headerActionText}>
                Create
              </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
  
  return (
    <SafeAreaView  style={CommonStyles.container}>
      {HeaderComponent()}
      <View style={styles.body}>
        <SearchInput
          value={searchText}
          onChange={setSearchText}
        /> 
        <FlatList 
          data={filters}
          renderItem={renderItem}
          keyExtractor={(item) => item.userId}
        />
      </View>
    </SafeAreaView>
  );
};

export {CreateChannelScreen};
