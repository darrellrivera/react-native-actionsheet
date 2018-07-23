import { Platform, StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        marginHorizontal: 10,
        marginBottom: 10,
      },
    }),
  },
  body: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: Platform.OS === 'ios' ? 'transparent': '#e5e5e5',
  },
  titleBox: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titleText: {
    color: '#757575',
    fontSize: 14
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12
  },
  buttonBox: {
    height: 57,
    marginTop: hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  borderTopRadius: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  borderBottomRadius: {
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttonText: {
    fontSize: 18
  },
  bold: {
    fontWeight: 'bold',
  },
  cancelButtonBox: {
    height: 57,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 14 : 0,
  }
}
