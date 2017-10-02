import * as ActionTypes from './ActionTypes.js';

export const refreshdata = (caption, value) => {
	return {
		type: ActionTypes.REFRESHDATA,
		caption: caption,
		value: value
	};
};