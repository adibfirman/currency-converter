import React, { Component } from 'react';
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { TransparentButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '70.1'
const TEMP_CONVERTION_RATE = 0.7974
const TEMP_CONVERTION_DATE = new Date()

class Home extends Component {

  onPressBaseCurrency = () => {
    console.log('onPressBaseCurrency')
  }

  onPressQuoteCurrency = () => {
    console.log('onPressQuoteCurrency')
  }

  changeTextCurrency = (text) => {
    console.log('change text', text)
  }

  swapReverseCurrency = () => {
    console.log('swapReverseCurrency')
  }

  handlePressHeader = () => {
    console.log('gear header pressed')
  }

  render () {
    return (
      <Container>
        <StatusBar
          translucent={true}
          barStyle="light-content" />
        <Header onPress={this.handlePressHeader} />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.onPressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.changeTextCurrency} />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.onPressQuoteCurrency}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE} />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERTION_DATE}
          convertionRate={TEMP_CONVERTION_RATE} />
        <TransparentButton
          onPress={this.swapReverseCurrency}
          text="Reverse Currencies" />
      </Container>
    )
  }

}

export default Home