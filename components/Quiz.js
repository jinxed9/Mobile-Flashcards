import React, { Component } from 'react'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { gray, white, purple, lightPurp} from '../utils/colors'

class Quiz extends Component {
  state={
    index: 0,
    correct: 0,
    incorrect: 0,
    showAnswer: false,
  }

  onCorrectPress = () => {
    const { correct, index } = this.state
    this.setState({
      index: index+1,
      correct: correct+1,
      showAnswer: false,
    })
  }

  onIncorrectPress = () => {
    const { incorrect, index } = this.state
    this.setState({
      index: index+1,
      incorrect: incorrect+1,
      showAnswer: false,
    })
  }

  onShowAnswerPress = () => {
    this.setState({showAnswer: true})
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      correct: 0,
      incorrect: 0,
    })
  }


  render(){
    console.log(this.props)
    const { questions, title } = this.props.deck
    
    return (
        <View>
        { questions.length > 0 ?
            this.state.index < questions.length ?
            <View>
              <Text>{`${this.state.index+1}/${questions.length}`}</Text>
              <Text>{`${questions[this.state.index].question}`}</Text>
              {this.state.showAnswer ? 
                <View>
                  <Text>{`${questions[this.state.index].answer}`}</Text>
                  <TextButton style={styles.textBtn} onPress={this.onCorrectPress} children={'Correct'}/>
                  <TextButton style={styles.deleteBtn} onPress={this.onIncorrectPress} children={'Incorrect'} />
                </View>
                :
                <View>
                  <TextButton style={styles.textBtn} onPress={this.onShowAnswerPress} children={'Show Answer'}/>
                </View>
              }
            </View>
            :
            <View>
              <Text>Results</Text>
              <Text>{`${this.state.correct} correct out of ${questions.length}`}</Text>
              <Text>{`${this.state.incorrect} incorrect out of ${questions.length}`}</Text>
              <Text>{`Score: ${this.state.correct/questions.length}`}</Text>
              <TextButton style={styles.deleteBtn} onPress={this.restartQuiz} children={'Restart Quiz'} />
            </View>
         :
          <View>
            <Text>"There are no cards in this deck!"</Text>
          </View>
        }
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

function mapStateToProps( decks, { navigation }){
  const { title } = navigation.state.params
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(Quiz)