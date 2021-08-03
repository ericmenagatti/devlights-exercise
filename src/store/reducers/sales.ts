import * as actionTypes from 'src/store/actions/actionTypes';
import { ISale } from 'src/types/sales';
import { AnyAction } from 'redux';

const initialState = {
  sales: [] as ISale[],
  loading: false,
  error: null,
	cart: [] as ISale[],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_SALES_START:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_SALES_SUCCESS:
			return {
				...state,
				loading: false,
				sales: action.sales,
			};
		case actionTypes.FETCH_SALES_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case actionTypes.ADD_CART:
			return {
				...state,
				cart: state.cart.concat(action.cart),
			}
		case actionTypes.REMOVE_CART:
			return {
				...state,
				cart: state.cart.filter((cart: any) => cart.gameID.toString() !== action.cartId),
			}
    default:
      return state;
  };
};

export default reducer;