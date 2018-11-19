import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { purple } from './utils/colors'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'
import MainNavigator from './components/MainNavigator'
import UdaciStatusBar from './components/UdaciStatusBar'


export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware )}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
