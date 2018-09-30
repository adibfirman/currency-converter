import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers'

const middleware = []
if (__DEV__) {
  middleware.push(logger)
}

export default createStore(reducers, applyMiddleware(...middleware))