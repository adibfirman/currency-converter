import React from 'react'
import PropTypes from 'prop-types'
import {
  View, TouchableHighlight, Text, TextInput
} from 'react-native'

import styles from './styles'

const InputWithButton = ({ onPress, buttonText, editable = true }) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={onPress}
      style={styles.btnContainer}
    >
      <Text style={styles.btnText}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.border} />
    <TextInput style={styles.input} />
  </View>
)

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
}

export default InputWithButton