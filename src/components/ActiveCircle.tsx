import { colors } from '@commons';
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
interface Props {
  style?: any,
  width: number,
  active: boolean
}
const ActiveCircle = (props: Props) => {
  return (
    <View style={props.style}>
      <View style={[
        styles.container, 
        {
          backgroundColor: props.active ? colors.green : colors.gray,
          width: props.width,
          height: props.width,
          borderRadius: props.width/2,
          borderWidth: props.width > 8 ? 2 : 1,
        }
      ]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
  },
});

export default ActiveCircle;