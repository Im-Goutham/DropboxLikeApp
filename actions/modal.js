import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {API_URL} from '../config'


import {
  SHOW_MODAL,
} from './types';



export const toggleModal = (data) => async dispatch => {
  console.log('data of modal  is '+data);
  try {
    dispatch({ type: SHOW_MODAL, payload: data});
  } catch (error) {
    throw error;
  }
};

// export const likeUser = (user) => {
//   return {
//     payload: user,
//     type: LIKE_USER
//   }
// };
