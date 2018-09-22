import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { ListItem, Seperator } from '../components/List'

const ICON_SIZE = 23
const ICON_COLOR = '#868686'

class Options extends Component {

  render () {
    return (
      <ScrollView>
        <StatusBar
          translucent={false}
          barStyle="default"
        />
        <ListItem
          text="Themes"
          customIcon={
            <Icon
              name="md-arrow-dropright"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Seperator />
        <ListItem
          text="Fixer.io"
          customIcon={
            <Icon
              name="md-link"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Seperator />
      </ScrollView>
    )
  }

}

export default Options