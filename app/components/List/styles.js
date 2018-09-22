import EStyleSheet from 'react-native-extended-stylesheet'

const borderWith = 30
const iconWidth = 15

export default EStyleSheet.create({
  row: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white'
  },
  text: {
    fontSize: 16,
    color: '$darkText'
  },
  seperator: {
    backgroundColor: '$border',
    flex: 1,
    height: 1
  },
  icon: {
    backgroundColor: '$primaryBlue',
    width: borderWith,
    height: borderWith,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    width: iconWidth,
    height: iconWidth
  }
})