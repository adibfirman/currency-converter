import React from 'react'
import PropTypes from 'prop-types'
import {
  View, TouchableHighlight, Text, TextInput
} from 'react-native'
import color from 'color'

import styles from './styles'

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props

  const underlayColor = color(styles.$btnBackgroundColorBase).darken(styles.$btnBackgroundColorOpacity)
  const styleContainer = [styles.container]
  if (!editable) {
    styleContainer.push(styles.containerDisabled)
  }


  return (
    <View style={styleContainer}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        {...props}
        style={styles.input}
        underlineColorAndroid="transparent" />
    </View>
  )
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
}

export default InputWithButton