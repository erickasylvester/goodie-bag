import axios from 'axios'

const initialState = {
  allCandies: []
}

//action types
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES_SUCCESSFULLY'

//action creator => function that returns an action object
const gotAllCandies = (candies) => ({
  type: GOT_ALL_CANDIES,
  candies
})

//thunk creator => returns a function
export const getAllCandies = () => async (dispatch) => {
  const {data} = await axios.get('/api/candies');
  dispatch(gotAllCandies(data));
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return {...state, allCandies: action.candies}
    default:
      return state
  }
}

export default rootReducer
