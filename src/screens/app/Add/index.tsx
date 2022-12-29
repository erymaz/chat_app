import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonStyles} from '@commons';
import {styles} from './style';
import { BottomTabStackParamList } from '@navigation/BottomTabStack';

type Props = NativeStackScreenProps<BottomTabStackParamList, 'Add'>;

const AddScreen: React.FC<Props> = () => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.body}>
        <Text style={CommonStyles.font14_b}>Add</Text>
      </View>
    </View>
  );
};

export {AddScreen};
