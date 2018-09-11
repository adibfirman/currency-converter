import React, { Component } from 'react';
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = 100
const TEMP_QUOTE_PRICE = 70.1

class Home extends Component {

  onPressBaseCurrency = () => {
    console.log('onPressBaseCurrency')
  }

  onPressQuoteCurrency = () => {
    console.log('onPressQuoteCurrency')
  }

  render () {
    return (
      <Container>
        <StatusBar
          translucent={true}
          barStyle="light-content" />
        <Logo/>
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.onPressBaseCurrency} />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.onPressQuoteCurrency} />
      </Container>
    )
  }

}

export default Home