import  React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, TextInput } from 'react-native';
import DeckListItem from './DeckListItem'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { white, purple } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

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
        <Text> What is the name of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <SubmitBtn onPress={this.submit} />
      </View>
    );
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
})


export default connect()(AddDeck)