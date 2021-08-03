import { all, fork, takeEvery } from "redux-saga/effects";
import * as actionTypes from 'src/store/actions/actionTypes';
import { fetchSalesSaga } from 'src/store/sagas/sales';

function* watchSales() {
	yield takeEvery(actionTypes.FETCH_SALES, fetchSalesSaga);
}

export function* rootSaga() {
  yield all([
    fork(watchSales),
  ]);
}