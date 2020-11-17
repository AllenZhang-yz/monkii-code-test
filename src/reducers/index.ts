import { combineReducers } from 'redux';
import { ITotalPriceState, totalPriceReducer } from './totalPriceReducer';

export interface IRootState {
  totalPrice: ITotalPriceState;
}

export const rootReducer = combineReducers({ totalPrice: totalPriceReducer });
