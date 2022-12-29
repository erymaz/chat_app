import {StyleSheet} from 'react-native';
import { colors } from '@commons';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  notchView: {
    // height: '51%',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingTop: 60,
    marginBottom: 10,
  },
  backIcon: {
    width: 45,
    height: 45,
  },
  ratingContainer: {
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    width: '100%'
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "600"
  },
  headerActiveContainer: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: 4
  },
  headerActiveText: {
    fontSize: 13,
    color: colors.normalText,
    paddingLeft: 4
  },
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  userAvatar: {
    width: 55,
    height: 55,
  },
  circleStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    position: 'absolute',
    top: 4,
    right: 2,
    backgroundColor: 'green',
    borderColor: 'green',
  },
  headerContent: {paddingHorizontal: 11},
  headerTitle: {
    color: colors.white,
    fontSize: 16,
  },
  helloText: {
    fontSize: 14,
    color: colors.white,
  },
  messageBox: {
    backgroundColor: colors.primary,
    margin: 7,
    padding: 30,
  },
  leftTextBubble: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingRight: 20,
    paddingLeft: 10,
  },
  rightTextBubble: {
    alignSelf: 'flex-end',
  },
  leftText: {
    color: colors.white,
    fontSize: 13,
    marginRight: 15,
  },
  rightText: {
    color: 'blue',
    fontSize: 13,
    marginRight: 15,
  },
  talkBubbleLeft: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginLeft: 2,
    maxWidth: '80%'
  },
  talkBubbleSquareLeft: {
    // width: wp(90),
    marginRight: 50,
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    left: 20,
  },
  talkBubbleTriangleLeft: {
    position: 'absolute',
    left: 14,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'blue',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent',
    transform: [{rotate: '90deg'}],
  },
  talkBubbleRight: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginRight: 2,
    maxWidth: '80%'
  },
  talkBubbleSquareRight: {
    // width: wp(90),
    marginLeft: 50,
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    right: 20,
  },
  talkBubbleTriangleRight: {
    position: 'absolute',
    right: 14,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: colors.primary,
    borderBottomWidth: 13,
    borderBottomColor: 'transparent',
    transform: [{rotate: '90deg'}],
  },
  timeOnleft: {
    marginLeft: 16,
    color: colors.primary,
    fontSize: 9,
    marginBottom: 10,
  },
  timeOnRight: {
    alignSelf: 'flex-end',
    marginRight: 16,
    color: colors.primary,
    fontSize: 9,
    marginBottom: 10,
  },
  sendButton: {
    justifyContent: 'center',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  inputContainer: {
    borderRadius: 10,
    marginHorizontal: 16,
    borderTopColor: 'transparent',
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  chatView: {flex: 1, backgroundColor: '##F6F6F6'},
  textInput: {
    fontSize: 15,
    lineHeight: 22,
    color: 'blue',
    includeFontPadding: false
  },
  listView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  bottomButton: {
    marginHorizontal: 16,
    marginTop: 15,
  },
  typingText: {
    color: colors.primary,
  },
  typingContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  dateFormat: {
    color: colors.primary,
    fontSize: 10,
    marginTop: 20,
  },
  convoDate: {alignItems: 'center', paddingBottom: 10},
  todayView: {alignItems: 'center'},
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray
  }
});