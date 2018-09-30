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

class Home extends Component {

  onPressBaseCurrency = () => {
    this.goToCurrencyList({
      title: 'Base Currency',
      type: 'base'
    })
  }

  onPressQuoteCurrency = () => {
    this.goToCurrencyList({
      title: 'Quote Currency',
      type: 'quote'
    })
  }

  goToCurrencyList (params) {
    this.props.navigation.navigate('CurrencyList', { ...params })
  }

  changeTextCurrency = amount => {
    this.props.dispatch(changeCurrencyAmount(amount))
  }

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency())
  }

  handlePressHeader = () => {
    this.props.navigation.navigate('Options')
  }

  render () {
    const { baseCurrency, quoteCurrency, amount, convertionRate, isFetching, lastConverted } = this.props
    let quotePrice = '...'

    if (!isFetching) {
      quotePrice = (amount * convertionRate).toFixed(2)
    }

    return (
      <Container>
        <StatusBar
          translucent={true}
          barStyle="light-content" />
        <Header onPress={this.handlePressHeader} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.onPressBaseCurrency}
            defaultValue={amount}
            keyboardType="numeric"
            onChangeText={this.changeTextCurrency} />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.onPressQuoteCurrency}
            editable={false}
            defaultValue={quotePrice} />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConverted}
            convertionRate={convertionRate} />
          <TransparentButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    )
  }

}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency, amount, conversions } = state.currencies
  const baseConvertion = conversions[baseCurrency] || {}
  const rates = baseConvertion.rates || {}

  return {
    baseCurrency, quoteCurrency, baseConvertion,
    amount: amount.toString(),
    convertionRate: rates[quoteCurrency] || 0,
    lastConverted: baseConvertion.date ? new Date(baseConvertion.date) : new Date(),
    isFetching: baseConvertion.isFetching
  }
}

export default connect(mapStateToProps)(Home)