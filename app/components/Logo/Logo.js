import React from 'react'
import {
  View, Image, Text, ImageBackground
} from 'react-native'

import styles from './styles'

const bgImage = require('./images/background.png')
const logoImg = require('./images/logo.png')

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode="contain"
      source={bgImage}
      style={styles.containerImg}>
      <Image
        resizeMode="contain"
        source={logoImg}
        style={styles.imageChild} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
)

export default Logo