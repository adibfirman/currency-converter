import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'
import Options from '../screens/Options'
import Themes from '../screens/Themes'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      title: 'Option'
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    })
  }
}, {
  headerMode: 'screen'
})

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    })
  }
})

export default createStackNavigator({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})