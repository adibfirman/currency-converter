import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

const gearIcon = require('./images/gear.png')
const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Image source={gearIcon} />
    </TouchableOpacity>
  </View>
)

Header.propTypes = {
  onPress: PropTypes.func
}

export default Header