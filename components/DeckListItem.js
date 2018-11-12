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
    return (
      <View>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.listItem}>{title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    textAlign: 'center',
    color: white,
    backgroundColor: purple,
    padding: 10,
    height: 45,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function mapStateToProps(decks,{title}){
  const deck = decks[title]

  return {deck}
}

export default connect(mapStateToProps)(DeckListItem)