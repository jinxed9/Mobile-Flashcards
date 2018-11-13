import  React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, TextInput } from 'react-native';
import { white, purple } from '../utils/colors'

function TextInputField ({ onChangeText, value, onFocus }) {
  return (
      <TextInput
          style={Platform.OS === 'ios' ? styles.iosTextInput : styles.AndroidTextInput}
          onChangeText={onChangeText}
          onFocus={onFocus}
          value={value}
        />
  )
}

const styles = StyleSheet.create({
  iosTextInput: {
    backgroundColor: white,
    padding: 10,
    borderRadius: 8,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidTextInput: {
    backgroundColor: white,
    margin: 20,
    height: 45,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
})

export default TextInputField