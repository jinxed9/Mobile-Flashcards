import  React, { Component } from 'react';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { Text, View, FlatList} from 'react-native';
import DeckListItem from './DeckListItem'
import { getDecks } from '../utils/api'


class DeckList extends Component{
  componentDidMount( ){
    const { dispatch } = this.props
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
  }

  render() {
    const { navigation, decks } = this.props
    return (
      <View>
        <FlatList 
          data={Object.values(decks).map((deck) => ({key: deck.title}))} 
          renderItem={ ({item}) => <DeckListItem 
                                      title={item.key}
                                      navigation={this.props.navigation} 
                                    />} 
        />
      </View>
    );
  }
}

function mapStateToProps(decks){
  return {decks}
}

export default connect(mapStateToProps)(DeckList)

