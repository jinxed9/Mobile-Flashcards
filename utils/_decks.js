import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'MFC:Decks'

function getRandomNumber( max ) {
  return Math.floor(Math.random() * max) + 0
}

function setDecksData(){
	
	const decks = {
	  React: {
	    title: 'React',
	    questions: [
	      {
	        question: 'What is React?',
	        answer: 'A library for managing user interfaces'
	      },
	      {
	        question: 'Where do you make Ajax requests in React?',
	        answer: 'The componentDidMount lifecycle event'
	      }
	    ]
	  },
	  JavaScript: {
	    title: 'JavaScript',
	    questions: [
	      {
	        question: 'What is a closure?',
	        answer: 'The combination of a function and the lexical environment within which that function was declared.'
	      }
	    ]
	  }
	}


	AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify( decks ))

	return decks
}

export function formatDecksResults( results ){
	return results === null
		? setDecksData()
		: JSON.parse(results) 
}


