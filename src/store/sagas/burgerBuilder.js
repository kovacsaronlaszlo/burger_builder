import { put } from "redux-saga/effects";
import axios from '../../axios-order';

import * as actions from '../actions';

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get( 'https://react-my-burger-b7bf7.firebaseio.com/ingredients.json' );
    yield put(actions.setIngredients(response.data));
  } catch(error) {
    yield put(actions.fetchIngredientsFailed());
  }
}