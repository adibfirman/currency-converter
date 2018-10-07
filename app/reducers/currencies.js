import {
  SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'IDR',
  amount: 100,
  conversions: {}
}

const setConversion = (state, action) => {
  const getConvertionData = state.conversions[action.currency]
  let defaultState = {
    isFetching: true,
    date: '',
    rates: {}
  }

  if (getConvertionData) {
    defaultState = getConvertionData
  }

  return {
    ...state.conversions,
    [action.currency]: defaultState
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      }
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount
      }
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversion(state, action)
      }
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversion(state, action)
      }
    default:
      return state
  }
}

export default reducer