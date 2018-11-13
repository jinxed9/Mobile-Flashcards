import React, { Component } from 'react'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { gray, white, purple, green, red} from '../utils/colors'

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
        <View style={styles.container}>
        { questions.length > 0 ?
            this.state.index < questions.length ?
            <View>
              <Text style={styles.index}>
                {`${this.state.index+1}/${questions.length}`}
              </Text>
              <Text style={styles.question}>
                {`${questions[this.state.index].question}`}
              </Text>
              {this.state.showAnswer ? 
                <View>
                  <Text style={styles.answer}>
                    {`${questions[this.state.index].answer}`}
                  </Text>
                  <TextButton 
                    btnStyle={styles.correctBtn}
                    txtStyle={styles.btnTxt} 
                    onPress={this.onCorrectPress} 
                    value={'Correct'}/>
                  <TextButton 
                    btnStyle={styles.incorrectBtn}
                    txtStyle={styles.btnTxt} 
                    onPress={this.onIncorrectPress} 
                    value={'Incorrect'} />
                </View>
                :
                <View>
                  <TextButton 
                    btnStyle={styles.showBtn} 
                    txtStyle={styles.btnTxt}
                    onPress={this.onShowAnswerPress} 
                    value={'Show Answer'}/>
                </View>
              }
            </View>
            :
            <View>
              <Text style={styles.results}>Results</Text>
              <Text style={styles.numCorrect}>
                {`${this.state.correct} correct out of ${questions.length}`}
              </Text>
              <Text style={styles.score}>
                {`Score: ${this.state.correct/questions.length}`}
              </Text>
              <TextButton 
                btnStyle={styles.restartBtn}
                txtStyle={styles.btnTxt} 
                onPress={this.restartQuiz} 
                value={'Restart Quiz'} />
            </View>
         :
          <View>
            <Text style={styles.emptyDeck}>There are no cards in this deck!</Text>
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
    backgroundColor: white,
  },
  incorrectBtn:{
    backgroundColor: red,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restartBtn:{
    backgroundColor: green,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correctBtn:{
    backgroundColor: green,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showBtn:{
    backgroundColor: purple,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt:{
    color: white,
    fontSize: 20,
  },
  emptyDeck:{
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  index:{
    fontSize:15,
    alignSelf: 'flex-end',
  },
  question:{
    fontSize: 20,
    alignSelf: 'center',
  },
  answer:{
    fontSize: 20,
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  results:{
    fontSize: 30,
    alignSelf: 'center',
  },
  numCorrect:{
    fontSize: 20,
    alignSelf: 'center',
  },
  score:{
    fontSize: 25,
    alignSelf: 'center',
  }
})

function mapStateToProps( decks, { navigation }){
  const { title } = navigation.state.params
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(Quiz)