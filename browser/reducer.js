import axios from 'axios'
const initialState = {
  messages: []
}

/* ------------ REDUCER ------------------ */

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      if (state.messages.length > 200) return {state, messages: state.messages.slice(1).concat(action.payload)};
      return {state, messages: state.messages.concat(action.payload)};
    default:
      return state;
  }
}

/* ----------------- ACTIONS ------------------ */

const ADD = 'ADD';

/* ------------ ACTION CREATORS ------------------ */

export const addInputAction = input => ({
  type: ADD,
  payload: [['me', input]]
})

export const addResponseAction = response => ({
  type: ADD,
  payload: [['watson', response]]
})

/* ------------ DISPATCHERS ------------------ */

// export const addUser = newUser => {
//   return dispatch => {
//     return axios.post('/api/admin', newUser)
//     .then(() => dispatch(fetchUsers()))
//     .then(res => dispatch(initUser(res.data)))
//     .catch(err => console.error(`Creating user: ${newUser} unsuccesful`, err))
//   }
// }

/* ------------------ DEFAULT EXPORT ------------------ */

export default reducer;







