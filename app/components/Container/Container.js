import React from 'react';
import {
  View, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Container = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

Container.propType = {
  children: PropTypes.element
}

export default Container