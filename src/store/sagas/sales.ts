import { put } from 'redux-saga/effects';
import axios from 'src/axios-database';
import * as actions from 'src/store/actions';
import { AnyAction } from 'redux';
import { ISales } from 'src/types/sales';

export function* fetchSalesSaga(action: AnyAction): Generator<any, any, any> {
  yield put(actions.fetchSalesStart());
  try {
    const response = yield axios.get('');
    const salesObject: ISales = { sales: [] };
    for (let key in response.data) {
      salesObject.sales.push({
        ...response.data[key],
      });
    };
    yield put(actions.fetchSalesSuccess(salesObject));
  } catch(error) {
    yield put(actions.fetchSalesFail(error));
  }
};

export function* addToCart(action: AnyAction): Generator<any, any, any> {
  yield put(actions.addToCart(action.cart));
};

export function* removeFromCart(action: AnyAction): Generator<any, any, any> {
  yield put(actions.removeCart(action.cartId));
};