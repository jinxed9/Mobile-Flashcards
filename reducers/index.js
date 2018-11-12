import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions'

function decks ( state = {}, action ){
	switch (action.type){
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks,
			}
		case ADD_DECK:
			return {
				...state,
				[action.title]:{
					title:[action.title],
					questions:[],
				}
			}
		case REMOVE_DECK:
			delete state[action.title]
			return {
				...state,
			}
		case ADD_CARD:
			return {
				...state,
				[action.title]:{
					title:[action.title],
					questions:[ ...state[action.title].questions,
						{question: action.question, answer: action.answer},
						]
				}
			}
		default:
			return state
	}
}

export default decks