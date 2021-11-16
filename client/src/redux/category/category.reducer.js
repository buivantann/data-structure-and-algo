import categoryTypes from './category.types'

const initialState = {
	categories: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case categoryTypes.SET_CATEGORY:
			return {
				...state,
				categories: action.payload
			}
		default:
			return state
	}
}

export default reducer
