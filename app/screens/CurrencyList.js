import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import currencies from '../data/currencies'
import { ListItem, Seperator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrenct, changeQuoteCurrency } from '../actions/currencies'

class CurrenctList extends Component {

  handlePress = item => {
    const { type } = this.props.navigation.state.params
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(item))
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(item))
    }

    this.props.navigation.goBack(null)
  }

  renderListItem = ({ item }) => {
    const { navigation, baseCurrency, quoteCurrency } = this.props
    const { type } = navigation.state.params
    let comparasionCurrency = baseCurrency
    if (type === 'quote') {
      comparasionCurrency = quoteCurrency
    }

    return (
      <ListItem
        onPress={() => this.handlePress(item)}
        text={item}
        selected={item === comparasionCurrency} />
    )
  }
  
  render () {
    const keyExtractorList = (item) => item

    return (
      <View>
        <StatusBar
          barStyle="default"
          translucent={false} />
        <FlatList
          data={currencies}
          renderItem={this.renderListItem}
          keyExtractor={keyExtractorList}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    )
  }

}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies

  return {
    baseCurrency, quoteCurrency
  }
}

export default connect(mapStateToProps)(CurrenctList)