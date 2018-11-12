import React, { Component } from 'react'
import TextButton from './TextButton'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { gray, white, purple, lightPurp} from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

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
        <Text style={{fontSize: 16, color: gray, alignSelf: 'center', margin: 10}}>Add Question</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <SubmitBtn onPress={this.submit} />
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
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
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