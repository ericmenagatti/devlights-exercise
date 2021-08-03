import { createSelector } from "reselect";
import { AppState } from "src/store/rootReducer";

export const salesSelector = createSelector((state: AppState) => state.sales.sales, (sales) => sales.sales);
export const isSalesLoadingSelector = createSelector((state: AppState) => state.sales.loading, (loading) => loading);

export const cartSelector = createSelector((state: AppState) => state.sales.cart, (cart) => cart);
