import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function trlReducer(state = initialState.trl, action) {
	switch (action.type) {
		case types.GET_TRL:
			return action.trl;
		default:
			return state;
	}
}

export default trlReducer;
