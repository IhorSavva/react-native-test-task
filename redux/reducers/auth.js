/**
 * Created by ihorsavva on 11/4/17.
 */
const defaultState = {
  username: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.username
      };
    case 'LOGOUT':
      return  {
        ...state,
        username: ''
      };
    default:
      return state;
  }
}