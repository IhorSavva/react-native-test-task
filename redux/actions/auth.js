/**
 * Created by ihorsavva on 11/4/17.
 */
export const login = (username) => {
  return {
    type: 'LOGIN',
    username
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};