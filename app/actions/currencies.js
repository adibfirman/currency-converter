export const SWAP_CURRENCY = 'swap_currency'
export const CHANGE_CURRENCY_AMOUNT = 'change_currency_amount'

export const swapCurrency = () => ({
  type: SWAP_CURRENCY
})

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount)
})