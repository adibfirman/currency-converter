import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 5

export default EStyleSheet.create({
  $btnBackgroundColorBase: '$white',
  $btnBackgroundColorOpacity: 0.1,
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    borderRadius: BORDER_RADIUS
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  btnContainer: {
    flex: 1,
    width: '10%',
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  btnText: {
    fontWeight: '600',
    color: '$primaryBlue',
    fontSize: 20
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 16,
    paddingRight: 200,
    color: '$inputText'
  }
})