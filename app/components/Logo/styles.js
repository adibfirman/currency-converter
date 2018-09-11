import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native';

const imgWidth = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imgWidth,
    height: imgWidth
  },
  imageChild: {
    width: imgWidth / 2
  },
  text: {
    color: '#fff',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  }
})