import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux';

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { TransparentButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '70.1'
const TEMP_CONVERTION_RATE = 0.7974
const TEMP_CONVERTION_DATE = new Date()

class Home extends Component {

  onPressBaseCurrency = () => {
    this.goToCurrencyList('Base Currency')
  }

  onPressQuoteCurrency = () => {
    this.goToCurrencyList('Quote Currency')
  }

  goToCurrencyList (titleHeader = null) {
    this.props.navigation.navigate('CurrencyList', { title: titleHeader })
  }

  changeTextCurrency = amount => {
    // TODO: distpach this action to redux action
    console.log(changeCurrencyAmount(amount))
  }

  handleSwapCurrency = () => {
    // TODO: dispatch this action to redux
    this.props.dispatch(swapCurrency())
  }

  handlePressHeader = () => {
    this.props.navigation.navigate('Options')
  }

  render () {
    return (
      <Container>
        <StatusBar
          translucent={true}
          barStyle="light-content" />
        <Header onPress={this.handlePressHeader} />
        <KeyboardAvoidingView behavior="padding">
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
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    )
  }

}

export default connect()(Home)