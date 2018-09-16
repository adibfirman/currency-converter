import React from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
const logo = require('./images/icon.png') 

const TransparentButton = ({ text, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={logo} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
)

TransparentButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
}

export default TransparentButton