import { takeEvery } from 'redux-saga'

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERTIONS } from '../actions/currencies'

function* fetchLatestConvertionRates(action) {
  console.log('action', action)
  yield
}

export default function* rootSaga () {
  yield takeEvery(GET_INITIAL_CONVERTIONS, fetchLatestConvertionRates)
  yield takeEvery(SWAP_CURRENCY, fetchLatestConvertionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConvertionRates)
}
