import React, { useContext } from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonStyles} from '@commons';
import {styles} from './style';
import MessageUserCard from '../../../components/MessageUserCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageStackParamList } from '@navigation/MessageStack';
import { useNavigation } from '@react-navigation/native';
import { ChatContext, UserContext } from '@contexts';
import { ConnectModel } from '@models';

type Props = NativeStackScreenProps<MessageStackParamList, 'MessageUserScreen'>;

const MessageUserScreen: React.FC<Props> = () => {

  const navigation = useNavigation();
  const {user, users} = useContext(UserContext)
  const {connects} = useContext(ChatContext)

  const renderItem = ({item, index}: {item: ConnectModel, index: number}) => {

    const onPressItem = () => {
      console.log(item);
      navigation.navigate('ChatScreen', {connectId: item.connectId, channelId: item.channelId})
    }
    
    const connectUsers = item.users.filter((u) => {
      return user?.userId != u
    })

    if(connectUsers.length < 1) {
      return
    }

    const connectUser = users.filter((u) => {
      return u.userId == connectUsers[0]
    })

    if(connectUser.length < 1) {
      return
    }


    return (
      <MessageUserCard 
        picture={connectUser[0].avatar}
        name={connectUser[0].username}
        description={item.lastMessage ?? ""}
        lastAt={item.lastMessageAt}
        onPress={onPressItem}
        active={new Date().getTime() - connectUser[0].lastActiveAt < 60000}
      />
    )
  }

  const onCreateChannel = () => {
    navigation.navigate('CreateChannelScreen')
  }

  const HeaderComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity 
              style={styles.headerCreateButton}
              onPress={onCreateChannel}
            >
              <Text style={styles.headerCreateText}>
                C
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.headerTitleText}>
              Messages
            </Text>
          </View>

          <View>
            <View style={styles.profileContainer}>
              <Image 
                source={{uri: user?.avatar}}
                style={styles.profile}
              />
            </View>
          </View>
        </View>
      </>
    )
  }
  
  return (
    <SafeAreaView  style={CommonStyles.container}>
      {HeaderComponent()}
      <View style={styles.body}>
        <FlatList 
          data={connects}
          renderItem={renderItem}
          keyExtractor={(item) => item.connectId}
        />
      </View>
    </SafeAreaView>
  );
};

export {MessageUserScreen};
