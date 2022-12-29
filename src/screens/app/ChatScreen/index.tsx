import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {InputToolbarProps} from 'react-native-gifted-chat/lib/InputToolbar';
import moment from 'moment';
import {styles} from './style';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MessageStackParamList } from '@navigation/MessageStack';
import { images } from '@commons';
import ActiveCircle from '@components/ActiveCircle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const MESSAGE_DETAIL = [
  {
    _id: 2,
    text: 'Hi. Nice to meet you',
    createdAt: new Date(),

    user: {
      _id: 'user001',
      name: 'React Native',
      avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
  },
  {
    _id: 3,
    text: 'what do you need?',
    createdAt: new Date(),

    user: {
      _id: 'user001',
      name: 'React Native',
      avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
    },
  },
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(new Date().getTime() - 1231232132),
    user: {
      _id: 'user002',
      name: 'React Native',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
  },
  
]

type Props = NativeStackScreenProps<MessageStackParamList, 'ChatScreen'>;

const ChatScreen = (props: Props) => {
  const navigation = useNavigation()
  const {chattingWithId, channel, subjectTeach, profilePic} = props.route.params;
  const [chattingWith, setChattingWith] = useState('');
  const [successInitChat, setSuccessInitChat] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [numOfOccupants, setNumOfOccupants] = useState(0);
  const [messages, setMessages] = useState([])

  let channelId = channel;
  console.log('channelId: ', channelId);

  useEffect(() => {
    setMessages(MESSAGE_DETAIL)
    if (channelId) {
      
    }
  }, []);

  useEffect(() => {

  }, []);

  let receiverId = 'user001';
  
  const onSendPress = (msg: any) => {
    console.log("---------onSendPress------------------", messages.length)
    var tmpMsgs = [...messages]
    setMessages([...msg, ...tmpMsgs])
  };

  const renderMessage = (msgProp: {
    currentMessage: {
      createdAt: string;
    };
    position: string;
    previousMessage: {
      createdAt?: string;
    };
  }) => {
    const today = moment().format('MMMM Do YYYY');
    const yesterday = moment().subtract(1, 'days').format('MMMM Do YYYY');
    const data = msgProp.currentMessage;
    const time: string = moment(data.createdAt).format('LT');
    const chatPosition: string = msgProp.position;
    const currentMessageDate = moment(msgProp.currentMessage.createdAt).format(
      'MMMM Do YYYY',
    );
    const prevMessageDate = msgProp.previousMessage?.createdAt
      ? moment(msgProp.previousMessage?.createdAt).format('MMMM Do YYYY')
      : '';
    let displayDate: string | undefined =
      currentMessageDate !== prevMessageDate ? currentMessageDate : undefined;
    displayDate =
      displayDate === today
        ? 'TODAY'
        : displayDate === yesterday
        ? 'YESTERDAY'
        : displayDate;

    console.log('----displayDate----', displayDate);
    return (
      <>
        <Text
          style={{
            ...(chatPosition === 'left'
              ? styles.timeOnleft
              : styles.timeOnRight),
          }}>
          {time}
        </Text>
        <View
          style={{
            ...(chatPosition === 'left'
              ? styles.talkBubbleLeft
              : styles.talkBubbleRight),
          }}>
          <View
            style={{
              ...(msgProp.position === 'left'
                ? styles.talkBubbleSquareLeft
                : styles.talkBubbleSquareRight),
            }}>
            <Text
              style={{
                ...(msgProp.position === 'left'
                  ? styles.leftText
                  : styles.rightText),
              }}>
              {data.text}
            </Text>
          </View>
          <View
            style={{
              ...(msgProp.position === 'left'
                ? styles.talkBubbleTriangleLeft
                : styles.talkBubbleTriangleRight),
            }}
          />
        </View>
        {messages?.length < 1 ? (
          <View style={styles.todayView}>
            <Text style={styles.dateFormat}>TODAY</Text>
          </View>
        ) : (
          displayDate && (
            <View style={styles.convoDate}>
              <Text style={styles.dateFormat}>{displayDate}</Text>
            </View>
          )
        )}
      </>
    );
  };
  const renderCustomInputToolbar = (inputProps: InputToolbarProps) => {
    return (
      <InputToolbar
        {...inputProps}
        // primaryStyle={{color: 'red'}}
        containerStyle={[styles.inputContainer, props.textInputStyle]}
      />
    );
  };

  const onPressBack = () => {
    navigation.goBack()
  }

  const HeaderComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View>
            <TouchableOpacity
              onPress={onPressBack}
            >
              <Image source={images.ic_chevron_left}/>
            </TouchableOpacity>
          </View>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>
              Christina Granados
            </Text>
            <View style={styles.headerActiveContainer}>
              <ActiveCircle
                width={8}
                active={true}
              />
              <Text style={styles.headerActiveText}>
                Active now
              </Text>
            </View>
          </View>

          <View>
          </View>
        </View>
        <View style={styles.divider} />
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent/>
      <View style={{flex: 1, marginBottom: 60}}>
        <GiftedChat
          messages={messages}
          onSend={text => onSendPress(text)}
          user={{
            _id: 'user001',
            name: "Murat",
            avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
        }}
          // renderAvatar={() => null}
          renderTime={() => null}
          wrapInSafeArea={false}
          // renderDay={(day)=>{
          //   console.log("--------renderDay-----", day)
          //   return <Text>{day.currentMessage?.createdAt?.toISOString()}</Text>
          // }}
          // onInputTextChanged={text => {
          //   if (text.length > 0) {
          //     pubNub.signal(
          //       {
          //         channel: channelId,
          //         message: `${userData.first_name}`,
          //       },
          //       ew => {
          //         console.log('ee', ew);
          //       },
          //     );
          //   }
          //   if (text.length === 0) {
          //     pubNub.signal(
          //       {
          //         channel: channelId,
          //         message: 'TYPING STOP',
          //       },
          //       ew => {
          //         console.log('ee', ew);
          //       },
          //     );
          //   }
          // }}
          // renderMessage={msg => renderMessage(msg)}
          listViewProps={{
            contentContainerStyle: styles.listView,
          }}
          // renderFooter={() => {
          //   return (
          //     <View style={styles.typingContainer}>
          //       {isTyping && (
          //         <Text style={styles.typingText}>
          //           {chattingWith.toUpperCase()} TYPING...
          //         </Text>
          //       )}
          //     </View>
          //   );
          // }}
          // renderInputToolbar={renderCustomInputToolbar}
          // isKeyboardInternallyHandled={false}
          // textInputStyle={styles.textInput}
          // alwaysShowSend
          // renderSend={sendProps => {
          //   const {text, messageIdGenerator, user, onSend} = sendProps;
          //   return (
          //     <TouchableOpacity
          //       onPress={() => {
          //         if (text?.trim().length === 0) {
          //           Toast.show('Please enter some message');
          //         }
          //         if (text && onSend) {
          //           onSend(
          //             {
          //               text: text.trim(),
          //               user: user,
          //               _id: messageIdGenerator(),
          //             },
          //             true,
          //           );
          //         }
          //       }}
          //       style={styles.sendButton}>
          //       <SEND width={21} height={21} />
          //     </TouchableOpacity>
          //   );
          // }}
          // keyboardShouldPersistTaps="never"
        />
      </View>
    </SafeAreaView>
  );
};
export default ChatScreen;