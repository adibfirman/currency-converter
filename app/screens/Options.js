import React, { Component } from 'react'
import { StatusBar, ScrollView, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { ListItem, Seperator } from '../components/List'
import { ConnectAlert } from '../components/Alert';

const ICON_SIZE = 23
const ICON_COLOR = '#868686'

class Options extends Component {

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes', { title: 'Themes Application' })
  }

  handleLinkExternal = () => {
    Linking.openURL('httpsdasdas://fixer.io/')
      .catch(err => {
        this.props.alertWithType('error', err.code, 'The Url Has Been Destroy..!!')
      })
  }

  render () {
    return (
      <ScrollView>
        <StatusBar
          translucent={false}
          barStyle="default"
        />
        <ListItem
          onPress={this.handleThemesPress}
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
          onPress={this.handleLinkExternal}
        />
        <Seperator />
      </ScrollView>
    )
  }

}

export default ConnectAlert(Options)