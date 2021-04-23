import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function productReducer(state = initialState.product, action) {
	switch (action.type) {
		case types.GET_PRODUCT_DETAILS:
			return action.product;
		case types.UPDATE_PRODUCT_DETAILS:
			return action.updatedProduct;
		case types.ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, { ...action.newCategory }],
			};
		case types.UPDATE_CATEGORY:
			console.log("action.category: ", action.category);
			return {
				...state,
				categories: state.categories.map((category) =>
					category.id === action.category.id ? action.category : category
				),
			};
		case types.ADD_BUSINESSMODEL:
			return {
				...state,
				businessModels: [
					...state.businessModels,
					{ ...action.newBusinessModel },
				],
			};

		case types.UPDATE_BUSINESSMODEL:
			return {
				...state,
				businessModels: state.businessModels.map((businessModel) =>
					businessModel.id === action.businessModel.id
						? action.businessModel
						: businessModel
				),
			};
		default:
			return state;
	}
}

export default productReducer;
