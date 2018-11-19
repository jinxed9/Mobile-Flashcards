import React from 'react'
import { View, StatusBar } from 'react-native'
import { purple, white } from '../utils/colors'
import { Constants } from 'expo'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default UdaciStatusBar