import { colors } from '@commons';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  profileContainer: {
    height: 32,
    width: 32,
    borderRadius: 5,
    overflow: 'hidden'
  },
  profile: {
    height: 32,
    width: 32,
    resizeMode: 'cover',
  },
  headerContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    height: 60
  },
  headerCreateButton: {
    width: 32, 
    height: 32, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: colors.c506, 
    borderRadius: 5
  },
  headerCreateText: {
    fontSize: 20,
    color: colors.white
  },
  headerTitleText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700'
  }
});
