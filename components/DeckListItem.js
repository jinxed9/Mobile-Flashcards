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
          <TouchableOpacity 
            style={styles.listItem}
            onPress={this.onPress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.size}>{`${length} cards`}</Text>
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
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: white,
    padding: 15,

  },
  title:{
    fontSize: 18,
    color: purple,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  size:{
    fontSize: 12,
    color: gray,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',  
  },
})

function mapStateToProps(decks,{title}){
  const deck = decks[title]
  return {deck}
}

export default connect(mapStateToProps)(DeckListItem)