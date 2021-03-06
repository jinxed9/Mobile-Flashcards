import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { purple, white, } from '../utils/colors'

function TextButton ({ value, onPress, txtStyle, btnStyle={} }){
	return(
		<TouchableOpacity
			style={btnStyle}
			onPress={onPress}>
			<Text style={txtStyle}>{value}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})

export default TextButton