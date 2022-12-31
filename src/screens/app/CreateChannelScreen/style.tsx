import { colors } from '@commons';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    height: 60
  },
  headerActionText: {
    fontSize: 15,
    color: colors.normalText
  },
  headerTitleText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700'
  },
});
