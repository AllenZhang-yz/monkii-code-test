interface IAction {
  type: 'ADD' | 'REDUCE';
  payload: number;
}

export interface ITotalPriceState {
  totalPrice: number;
}

const initialState: ITotalPriceState = {
  totalPrice: 0,
};

export const totalPriceReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, totalPrice: state.totalPrice + action.payload };
    case 'REDUCE':
      return { ...state, totalPrice: state.totalPrice - action.payload };
    default:
      return state;
  }
};
