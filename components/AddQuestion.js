import React, { Component } from 'react'
import TextButton from './TextButton'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { gray, white, purple, lightPurp} from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import SubmitButton from './SubmitButton'
import TextInputField from './TextInputField'

class AddQuestion extends Component {
	constructor(props){
    super(props)
    this.state = { question: 'Question', answer: 'Answer'}
  }

  submit = () => {
    const { answer, question } = this.state
    const { title } = this.props.navigation.state.params

    this.props.dispatch(addCard( title, question, answer ))

    addCardToDeck(title, question, answer)

    this.props.navigation.navigate('Deck',{title: title })
  }


  render(){
    return (
      <View>
        <TextInputField 
          onChangeText={(question) => this.setState({question})} 
          value={this.state.question}
        />
        <TextInputField 
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}/>
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textBtn: {
    margin: 10,
    textAlign: 'center',
    color: white,
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect()(AddQuestion)