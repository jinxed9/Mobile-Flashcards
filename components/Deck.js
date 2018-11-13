import React, { Component } from 'react'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { removeDeck } from '../actions'
import { gray, white, purple, lightPurp, green} from '../utils/colors'
import { deleteDeck } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Deck extends Component {

  onStartQuizPress = () => {
    const { title } = this.props.deck
    this.props.navigation.navigate('Quiz', {title: title})
    clearLocalNotification()
      .then(setLocalNotification())
  }

	onNewQuestionPress = () => {
    const { title } = this.props.deck
    this.props.navigation.navigate('AddQuestion',{title: title})
  }

  onDeletePress = () => {
    const { title } = this.props.navigation.state.params
    this.props.dispatch(removeDeck(title))
    deleteDeck(title)
    this.props.navigation.navigate('Home')
  }

  render(){
    console.log(this.props)
    const { deck } = this.props
    const length  = deck ? deck.questions.length : 0
    const title = deck ? deck.title : "None"
    return (
      <View style={styles.container}>
        <Text style={styles.deckSize}>{`${length} cards`}</Text>
        <TextButton
          btnStyle={styles.startBtn} 
          txtStyle={styles.startTxt}
          onPress={this.onStartQuizPress}
          value={'Start Quiz'}/>
        <TextButton 
          btnStyle={styles.addBtn}
          txtStyle={styles.addTxt} 
          onPress={this.onNewQuestionPress} 
          value={'Create Card'}/>
        <TextButton 
          btnStyle={styles.deleteBtn}
          txtStyle={styles.deleteText} 
          onPress={this.onDeletePress} 
          value={'Delete Deck'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    justifyContent:'space-around',
  },
  deleteBtn:{
    width: 100,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: purple,
  },
  startBtn: {
    backgroundColor: green,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startTxt: {
    color: white,
    fontSize: 20,
  },
  addBtn: {
    backgroundColor: purple,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTxt: {
    color: white,
    fontSize: 20,
  },
  deckSize: {
    color: gray,
    fontSize: 15,
    alignSelf: 'center'
  }
})

function mapStateToProps(decks, { navigation }){
  const { title } = navigation.state.params
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(Deck)