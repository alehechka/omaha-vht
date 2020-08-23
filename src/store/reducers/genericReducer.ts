import {
	GenericActionTypes,
	CREATE_GENERIC,
	CREATE_GENERIC_ERROR,
	UPDATE_GENERIC,
	UPDATE_GENERIC_ERROR,
	DELETE_GENERIC,
	DELETE_GENERIC_ERROR,
} from 'store/types/genericTypes';

interface State {
	[key: string]: any;
}

const initState: State = {};

const genericReducer = (state: State = initState, action: GenericActionTypes) => {
	switch (action.type) {
		case CREATE_GENERIC:
			console.log('CREATE_GENERIC', action);
			return {
				...state,
				[action.key]: action.object,
			};
		case CREATE_GENERIC_ERROR:
			console.log('CREATE_GENERIC_ERROR', action);
			return {
				...state,
				err: action.err,
			};
		case UPDATE_GENERIC:
			console.log('UPDATE_GENERIC', action);
			return {
				...state,
				[action.key]: action.object,
			};
		case UPDATE_GENERIC_ERROR:
			console.log('UPDATE_GENERIC_ERROR', action);
			return {
				...state,
				err: action.err,
			};
		case DELETE_GENERIC:
			console.log('DELETE_GENERIC', action);
			return {
				...state,
				[action.key]: null,
			};
		case DELETE_GENERIC_ERROR:
			console.log('DELETE_GENERIC_ERROR', action);
			return {
				...state,
				err: action.err,
			};
		default:
			return state;
	}
};

export default genericReducer;
