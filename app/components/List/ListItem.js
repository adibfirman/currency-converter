import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Icon from './Icon'
import styles from './styles';

const ListItem = ({ text, onPress, selected = false, customIcon = null }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      { selected && <Icon /> }
      { customIcon }
    </View>
  </TouchableOpacity>
)

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  customIcon: PropTypes.element
}

export default ListItem