import React from 'react'
import { View, Image } from 'react-native';

import styles from './styles';
const iconImg = require('./images/check.png')

const Icon = () => (
  <View style={styles.icon}>
    <Image
      style={styles.iconStyle}
      resizeMode="contain"
      source={iconImg}/>
  </View>
)

export default Icon