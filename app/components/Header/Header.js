import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style'

const ICON_SIZE = 25

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Icon
        name="ios-settings"
        color="#fff"
        size={ICON_SIZE} />
    </TouchableOpacity>
  </View>
)

Header.propTypes = {
  onPress: PropTypes.func
}

export default Header