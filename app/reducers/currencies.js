import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';

const initState = {
  baseCurrency: 'USD',
  quoteCurrency: 'IDR',
  amount: 100,
  conversions: {}
}

const reducer = (state = initState, action) => {
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
    default:
      return state
  }
}

export default reducer