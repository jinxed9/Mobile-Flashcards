import React, { Component } from 'react'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { removeDeck } from '../actions'
import { gray, white, purple, lightPurp} from '../utils/colors'
import { deleteDeck } from '../utils/api'

class Deck extends Component {

  onStartQuizPress = () => {
    const { title } = this.props.deck
    this.props.navigation.navigate('Quiz', {title: title})
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
      <View>
        <Text style={{fontSize: 16, color: gray, alignSelf: 'center', margin: 10}}>{title}</Text>
        <Text style={{alignSelf: 'center', margin: 10}}>{`${length} cards`}</Text>
        <TextButton style={styles.textBtn} onPress={this.onStartQuizPress}children={'Start Quiz'}/>
        <TextButton style={styles.textBtn} onPress={this.onNewQuestionPress} children={'Add New Question'}/>
        <TextButton style={styles.deleteBtn} onPress={this.onDeletePress} children={'Delete Deck'} />
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
  },
  deleteBtn: {
    margin: 10,
    textAlign: 'center',
    color: purple,
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

function mapStateToProps(decks, { navigation }){
  const { title } = navigation.state.params
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(Deck)