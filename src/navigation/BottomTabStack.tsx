import React from 'react';
import 'react-native-gesture-handler';
import {View, Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {images, colors} from '@commons';
import {isIphoneX} from '@utils';
import {styles} from './style';
import { HomeScreen } from '@screens/app';
import { SpaceScreen } from '@screens/app';
import { MessageScreen } from '@screens/app';
import { AddScreen } from '@screens/app';
import { NotificationScreen } from '@screens/app';

export type BottomTabStackParamList = {
  Home: undefined;
  Space: undefined;
  Add: undefined;
  Notification: undefined;
  Message: undefined;
};

type TabBarIconParams = {focused: boolean; color: string; size: number};

const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTab = () => {
  return (
    <BottomTabStack.Navigator
      tabBar={(props: any) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {isIphoneX() && <View style={[styles.xFillLine]} />}
        </View>
      )}
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        // tabBarInactiveTintColor: '#0D151C60',
        tabBarStyle: styles.navigator,
        tabBarShowLabel: false,
        // tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
      })}>
      <BottomTabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_home_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_home_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Home',
        }}
      />
      <BottomTabStack.Screen
        name="Space"
        component={SpaceScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_space_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_space_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Space',
        }}
      />
      <BottomTabStack.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_add_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_add_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Add',
        }}
      />
      <BottomTabStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_notification_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_notification_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Notification',
        }}
      />
      <BottomTabStack.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_message_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_message_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Message',
        }}
      />
    </BottomTabStack.Navigator>
  );
};

export default BottomTab;
