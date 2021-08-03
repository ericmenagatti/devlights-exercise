import * as actionTypes from 'src/store/actions/actionTypes';
import { ISales, ISale } from 'src/types/sales';

export const fetchSales = () => {
	return {
		type: actionTypes.FETCH_SALES,
	};
};

export const fetchSalesStart = () => {
	return {
		type: actionTypes.FETCH_SALES_START,
	};
};

export const fetchSalesSuccess = (sales: ISales) => {
	return {
		type: actionTypes.FETCH_SALES_SUCCESS,
		sales: sales,
	};
};

export const fetchSalesFail = (error: any) => {
	return {
		type: actionTypes.FETCH_SALES_FAIL,
		error: error,
	};
};

export const addToCart = (game: ISale) => {
	return {
		type: actionTypes.ADD_CART,
		cart: game,
	};
};

export const removeCart = (gameID: string) => {
	return {
		type: actionTypes.REMOVE_CART,
		cartId: gameID,
	};
};