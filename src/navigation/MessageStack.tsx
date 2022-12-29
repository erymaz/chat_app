import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '@screens/app/ChatScreen';
import { MessageUserScreen } from '@screens/app';

export type MessageStackParamList = {
  MessageUserScreen: undefined;
  ChatScreen: undefined;
};

const MessageStack = createNativeStackNavigator<MessageStackParamList>();

const MessageScreenStack = () => {
  return (
    <MessageStack.Navigator
      initialRouteName="MessageUserScreen"
      screenOptions={{headerShown: false}}>
      <MessageStack.Screen name="MessageUserScreen" component={MessageUserScreen} />
      <MessageStack.Screen name="ChatScreen" component={ChatScreen} />
    </MessageStack.Navigator>
  );
};

export default MessageScreenStack;
