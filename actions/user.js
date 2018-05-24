import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {API_URL} from '../config'


import {
  SAVE_USER, CHANGE_CONNECTION_STATUS
} from './types';



export const signIn = (user, callback) => async dispatch => {
  try {

  //  let { data } = await axios.get(API_URL); <- api url from env
  //  await AsyncStorage.setItem('user_data',JSON.stringify(user));
    dispatch({ type: SAVE_USER, payload: user });
    callback();
  } catch (error) {
    throw error;
  }
};


export const connectionState = ( status ) => {
  return { type: CHANGE_CONNECTION_STATUS, payload: status };
};

// export const likeUser = (user) => {
//   return {
//     payload: user,
//     type: LIKE_USER
//   }
// };
