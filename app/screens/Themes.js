import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import EStyleSheet from 'react-native-extended-stylesheet'

import { ListItem, Seperator } from '../components/List'

const styles = EStyleSheet.create({
  $blue: '#4F6D7A',
  $orange: '#D57A66',
  $green: '#00BD9D',
  $purple: '#9E768F',
})

class Themes extends Component {

  viewCustomIcon (color) {
    return (
      <Icon
        name="circle"
        size={30}
        color={color}
      />
    )
  }

  render () {
    return (
      <ScrollView>
        <StatusBar
          translucent={false}
          barStyle="default"
        />
        <ListItem
          text="Blue"
          customIcon={this.viewCustomIcon(styles.$blue)}
        />
        <Seperator />
        <ListItem
          text="Orange"
          customIcon={this.viewCustomIcon(styles.$orange)}
        />
        <Seperator />
        <ListItem
          text="Green"
          customIcon={this.viewCustomIcon(styles.$green)}
        />
        <Seperator />
        <ListItem
          text="Purple"
          customIcon={this.viewCustomIcon(styles.$purple)}
        />
        <Seperator />
      </ScrollView>
    )
  }

}

export default Themes