import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function productReducer(state = initialState.product, action) {
	switch (action.type) {
		case types.GET_PRODUCT_DETAILS:
			return action.product;
		case types.UPDATE_PRODUCT_DETAILS:
			return action.updatedProduct;
		default:
			return state;
	}
}

export default productReducer;
