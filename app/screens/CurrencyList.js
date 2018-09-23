import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'

import currencies from '../data/currencies'
import { ListItem, Seperator } from '../components/List'

class CurrenctList extends Component {

  state = {
    selectedMoney: ''
  }

  renderListItem = ({ item }) => (
    <ListItem
      onPress={this.handlePress}
      text={item}
      selected={item === this.state.selectedMoney} />
  )

  handlePress = () => {
    this.props.navigation.goBack()
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

export default CurrenctList