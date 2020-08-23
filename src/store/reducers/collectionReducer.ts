import { CollectionActionTypes, OPEN_COLLECTION } from 'store/types/collectionTypes';

interface State {
	[key: string]: boolean;
}

const initState: State = {
	demos: true,
};

const collectionReducer = (state: State = initState, action: CollectionActionTypes) => {
	switch (action.type) {
		case OPEN_COLLECTION:
			console.log('OPEN_COLLECTION', action);

			return {
				...state,
				collections: action.state.collections,
			};
		default:
			return state;
	}
};

export default collectionReducer;
