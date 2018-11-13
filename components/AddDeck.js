import  React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, TextInput } from 'react-native';
import DeckListItem from './DeckListItem'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { white, purple } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import SubmitButton from './SubmitButton'
import TextInputField from './TextInputField'

class AddDeck extends Component{
  constructor(props){
    super(props)
    this.state = { text: 'Deck Name'}
  }

  submit = () => {
    const title = this.state.text

    this.props.dispatch(addDeck(title))
    //Reset the state
    this.setState(() => ({text: 'Deck Name'}))

    saveDeckTitle( title )

    this.props.navigation.replace('Home')
    this.props.navigation.navigate('Deck', {title: title})

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.promptText}>What is the name of your new deck?</Text>
        <TextInputField 
          onChangeText={(text) => this.setState({text})} 
          value={this.state.text}
          />
        <SubmitButton onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: white
  },
  promptText:{
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
})


export default connect()(AddDeck)