import React from 'react'
import PropTypes from 'prop-types'
import {
  View, TouchableHighlight, Text
} from 'react-native'

import styles from './styles'

const InputWithButton = ({ onPress, buttonText, editable = true }) => (
  <View>
    <TouchableHighlight
      onPress={onPress}
    >
      <Text>{buttonText}</Text>
    </TouchableHighlight>
  </View>
)

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
}

export default InputWithButton