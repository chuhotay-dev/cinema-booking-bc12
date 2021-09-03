import userApi from 'apis/userApi';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './types';

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

const actLoginSuccess = currentUser => ({
  type: LOGIN_SUCCESS,
  payload: currentUser,
});

const actLoginFail = error => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLogin = (user, history) => {
  return dispatch => {
    dispatch(actLoginRequest());
    userApi
      .loginApi(user)
      .then(response => {
        dispatch(actLoginSuccess(response.data.content));
        history.push('/');
      })
      .catch(error => {
        dispatch(actLoginFail('Unable to login!'));
      });
  };
};

export const actLogout = () => ({
  type: LOGOUT,
  payload: null,
});
