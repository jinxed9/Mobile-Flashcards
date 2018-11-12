import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

export default function TextButton ({ children, onPress, style={} }){
	return(
		<TouchableOpacity onPress={onPress}>
			<Text style={style}>{children}</Text>
		</TouchableOpacity>
	)
}