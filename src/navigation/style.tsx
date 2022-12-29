import {StyleSheet} from 'react-native';
import {isIphoneX} from '@utils';
import {colors} from '@commons';

export const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    position: 'absolute',
    elevation: 30,
    height: isIphoneX() ? 88 : 60,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: isIphoneX() ? 34 : 0,
  },
  circle: {
    position: 'absolute',
    top: -6,
    width: 12,
    height: 7,
    backgroundColor: colors.black,
    alignSelf: 'center',
    borderBottomColor: colors.black,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  icon: {
    width: 26,
    height: 26,
    marginTop: 10,
  },
  tabBarLabelStyle: {
    top: -5,
  },
  tabBarIconStyle: {
    top: 0,
  },
});
