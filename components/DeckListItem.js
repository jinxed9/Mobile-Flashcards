import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { gray, white, purple } from '../utils/colors'

class DeckListItem extends Component {
  
  onPress = () => {
    console.log(this.props)
    this.props.navigation.navigate('Deck',{title: this.props.title})
  }


  render(){
    const { title} = this.props.deck
    const { length } = this.props.deck.questions
    const { style } = this.props
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.listItem}>{title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  listItem: {
    margin: 2,
    textAlign: 'center',
    color: purple,
    backgroundColor: white,
    padding: 15,
  }
})

function mapStateToProps(decks,{title}){
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(DeckListItem)