import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function getProductSuccess(product) {
	return { type: types.GET_PRODUCT_DETAILS, product };
}

export function updateProductSuccess(updatedProduct) {
	return { type: types.UPDATE_PRODUCT_DETAILS, updatedProduct };
}

export function addCategorySuccess(newCategory) {
	return { type: types.ADD_CATEGORY, newCategory };
}

export function updateCategorySuccess(category) {
	return { type: types.UPDATE_CATEGORY, category };
}

export function addBusinessModelSuccess(newBusinessModel) {
	return { type: types.ADD_BUSINESSMODEL, newBusinessModel };
}

export function updatedBusinessModel(businessModel) {
	return { type: types.UPDATE_BUSINESSMODEL, businessModel };
}

export function getProduct() {
	return function (dispatch) {
		return productApi
			.getProduct()
			.then((product) => {
				dispatch(getProductSuccess(product));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export function saveProduct(product) {
	return function (dispatch) {
		return productApi
			.saveProduct(product)
			.then(() => {
				dispatch(updateProductSuccess(product)); //simulate returned data change, since data returned is always the same
			})
			.catch((error) => {
				throw error;
			});
	};
}

export function addCategories(newCategory) {
	return (dispatch) => dispatch(addCategorySuccess(newCategory));
}

export function saveCategory(category) {
	return function (dispatch) {
		return dispatch(updateCategorySuccess(category));
	};
}

export function addBusinessModel(newBusinessModel) {
	return (dispatch) => dispatch(addBusinessModelSuccess(newBusinessModel));
}

export function saveBusinessModel(businessModel) {
	return function (dispatch) {
		return dispatch(updatedBusinessModel(businessModel));
	};
}
