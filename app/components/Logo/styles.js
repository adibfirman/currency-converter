import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native';

const imgWidth = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  $bottomLogo: 0,
  container: {
    alignItems: 'center'
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imgWidth,
    height: imgWidth,
    bottom: '$bottomLogo'
  },
  imageChild: {
    width: imgWidth / 2
  },
  text: {
    color: '$white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  }
})