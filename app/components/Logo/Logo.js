import React, { Component } from 'react'
import {
  View, Image, Text, ImageBackground,
  Keyboard, Animated
} from 'react-native'

import styles from './styles'

const bgImage = require('./images/background.png')
const logoImg = require('./images/logo.png')
const AnimatedImageBackground = new Animated.createAnimatedComponent(ImageBackground)
class Logo extends Component {

  defaultPositionLogo = new Animated.Value(styles.$bottomLogo)

  componentDidMount () {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide)
  }

  componentWillUnmount () {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.timing(this.defaultPositionLogo, {
      toValue: 100,
      duration: 250
    }).start()
  }

  keyboardHide = () => {
    Animated.timing(this.defaultPositionLogo, {
      toValue: styles.$bottomLogo,
      duration: 250
    }).start()
  }

  render () {
    const containerImgStyle = {
      ...styles.containerImg,
      bottom: this.defaultPositionLogo
    }
    
    return (
      <View style={styles.container}>
        <AnimatedImageBackground
          resizeMode="contain"
          source={bgImage}
          style={containerImgStyle}>
          <Image
            resizeMode="contain"
            source={logoImg}
            style={styles.imageChild} />
        </AnimatedImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }

}

export default Logo