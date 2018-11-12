import { AsyncStorage } from 'react-native'
import { formatDecksResults, DECKS_STORAGE_KEY } from './_decks'

export function getDecks(){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatDecksResults)

}

export function getDeck(){

}

export function saveDeckTitle(title){
	return AsyncStorage.mergeItem( DECKS_STORAGE_KEY, JSON.stringify({ 
		[title]:{
			title: title,
			questions: [],
		} 
	}) )
}

export function addCardToDeck(title,card){
	//This isn't correct. Its just a place holder for now. Need to
	//figure out the data model first. 
	return AsyncStorage.mergeItem( DECKS_STORAGE_KEY, JSON.stringify({ [title]:[card] }))
}

export function deleteDeck(title){
	return AsyncStorage.getItem( DECKS_STORAGE_KEY )
		.then( (results) => {
			const decks = JSON.parse(results)
			decks[title] = undefined
			delete decks[title]
			AsyncStorage.setItem( DECKS_STORAGE_KEY, JSON.stringify(decks) )
		} )
}

export function removeCardFromDeck(title,card){

}