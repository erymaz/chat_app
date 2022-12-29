import React from 'react';
import 'react-native-gesture-handler';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab, {BottomTabStackParamList} from './BottomTabStack';

export type AppStackParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabStackParamList>;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppScreenStack = () => {
  return (
    <AppStack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTabStack" component={BottomTab} />
    </AppStack.Navigator>
  );
};

export default AppScreenStack;
