import { colors } from '@commons';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import TimeAgo from 'react-native-timeago';
import ActiveCircle from './ActiveCircle';
interface Props {
  picture: string;
  name: string;
  description: string;
  lastAt: Date;
  onPress?: () => void;
  active: boolean;
}
const MessageUserCard = (props: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.itemListStyle} onPress={props.onPress}>
        <View style={styles.itemRowStyle}>
          <View style={styles.profileContainer}>
            <Image
              source={{uri: props?.picture}}
              style={styles.profile}
            />
            <ActiveCircle 
              style={styles.activeCircle}
              width={12}
              active={props.active}
            />
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={styles.textContainer}>
            <Text style={styles.userNameStyle}>{props?.name}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text numberOfLines={1} style={[styles.textDescStyle]}>
              {props?.description}
            </Text>
            <Text style={styles.timestyle}>
              <TimeAgo
                time={props.lastAt}
                interval={10000}
                hideAgo={false}
              />
            </Text>
            {/* {props.active ? (
              <View style={styles.numberOfMessagesBox}>
                <Text style={styles.numberOfMessages}>{1}</Text>
              </View>
            ) : null} */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightView: {
    paddingLeft: 8,
    flex: 1,
  },
  userNameStyle: {
    fontSize: 15,
    color: colors.black,
    fontWeight: '700'
  },
  itemListStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  profileContainer: {
    height: 50,
    width: 50,
  },
  profile: {
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  activeCircle: {
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  notificationCount: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    marginBottom: 15,
    // top: 10,
  },
  textDescStyle: {
    flex: 1,
    color: colors.normalText,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: 2,
  },
  userName: {
    fontSize: 14,
  },
  itemRowStyle: {
    flexDirection: 'row',
    // borderWidth:1
    // justifyContent: 'space-between',
  },
  notificationStyle: {
    height: 11,
    width: 11,
    borderRadius: 7,
    resizeMode: 'contain',
    position: 'absolute',
    right: -0,
    zIndex: 99,
  },
  timestyle: {
    fontSize: 13, 
    color: colors.normalText,
    marginLeft: 10
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%',
  },
  numberOfMessagesBox: {
    height: 25,
    width: 25,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  numberOfMessages: {
    color: colors.white,
  },
});

export default MessageUserCard;