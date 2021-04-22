import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

export function getProductSuccess(product) {
	return { type: types.GET_PRODUCT_DETAILS, product };
}

export function getTrlSuccess(trl) {
	return { type: types.GET_TRL, trl };
}

export function updateProductSuccess(updatedProduct) {
	return { type: types.UPDATE_PRODUCT_DETAILS, updatedProduct };
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
			.then((savedProduct) => {
				dispatch(updateProductSuccess(savedProduct));
			})
			.catch((error) => {
				throw error;
			});
	};
}

export function getTrl() {
	return function (dispatch) {
		return productApi
			.getTrl()
			.then((trl) => {
				dispatch(getTrlSuccess(trl));
			})
			.catch((error) => {
				throw error;
			});
	};
}
