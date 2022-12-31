import { colors } from '@commons';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


interface Props {
  picture: string;
  name: string;
  value: boolean,
  onValueChange: (checked: boolean) => void;
  active: boolean;
}
const UserCard = (props: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.itemListStyle} onPress={() => props.onValueChange(!props.value)}>
        <View style={styles.itemRowStyle}>
          <View>
            <Image
              source={{uri: props?.picture}}
              style={styles.profile}
            />
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={styles.textContainer}>
            <Text style={styles.userNameStyle}>{props?.name}</Text>
            <CheckBox
              value={props?.value}
              onValueChange={props?.onValueChange}
            />
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
  profile: {
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  itemRowStyle: {
    flexDirection: 'row',
    // borderWidth:1
    // justifyContent: 'space-between',
  },
});

export default UserCard;