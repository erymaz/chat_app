import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors, CommonStyles} from '@commons';
import {styles} from './style';
import MessageUserCard from '../../../components/MessageUserCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageStackParamList } from '@navigation/MessageStack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<MessageStackParamList, 'MessageUserScreen'>;

const MESSAGES = [
  {
    id: 1,
    channel_id: 'user001_channel_user002',
    sender_id: 'user002',
    sender_profile: 'https://randomuser.me/api/portraits/men/11.jpg',
    sender_name: 'John Kempler',
    last_message: 'How to meet that special so...',
    created_at: new Date(),
    active: true,
  },
  {
    id: 2,
    channel_id: 'user001_channel_user003',
    sender_id: 'user003',
    sender_profile: 'https://randomuser.me/api/portraits/women/11.jpg',
    sender_name: 'Christina',
    last_message: "Yeah I'm interested",
    created_at: new Date(),
    active: true,
  },
  {
    id: 3,
    channel_id: 'user001_channel_user004',
    sender_id: 'user004',
    sender_profile: 'https://randomuser.me/api/portraits/men/15.jpg',
    sender_name: 'Alphons',
    last_message: 'I took a short Meditation 101 class...',
    created_at: new Date(),
    active: false,
  },
  {
    id: 4,
    channel_id: 'user001_channel_user005',
    sender_id: 'user005',
    sender_profile: 'https://randomuser.me/api/portraits/women/41.jpg',
    sender_name: 'Haylie Botosh',
    last_message: 'got it. Cool!',
    created_at: new Date(),
    active: true,
  },
]
const MessageUserScreen: React.FC<Props> = () => {

  const navigation = useNavigation();

  const renderItem = ({item, index}: {item: any, index: number}) => {

    const onPressItem = () => {
      console.log(item);
      navigation.navigate('ChatScreen', {item: item})
    }
    
    return (
      <MessageUserCard 
        picture={item.sender_profile}
        name={item.sender_name}
        description={item.last_message}
        lastAt={item.created_at}
        onPress={onPressItem}
        active={item.active}
      />
    )

  }

  const HeaderComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity style={styles.headerCreateButton}>
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
                source={{uri: 'https://randomuser.me/api/portraits/men/9.jpg'}}
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
          data={MESSAGES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export {MessageUserScreen};
