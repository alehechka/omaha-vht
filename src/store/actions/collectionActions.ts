import { CollectionActionTypes, OPEN_COLLECTION } from 'store/types/collectionTypes';

export const openCollection = (key: string) => {
	return (dispatch: (action: CollectionActionTypes) => void, getState: () => any) => {
		let state = getState();
		if (!state.collections[key]) {
			state.collections[key] = true;
			dispatch({ type: OPEN_COLLECTION, state });
		}
	};
};

export const openCollections = (keys: string[]) => {
	return (dispatch: (action: CollectionActionTypes) => void, getState: () => any) => {
		let state = getState();
		let performDispatch = false;
		for (let key of keys) {
			if (!state.collections[key]) {
				state.collections[key] = true;
				performDispatch = true;
			}
		}
		if (performDispatch) {
			dispatch({ type: OPEN_COLLECTION, state });
		}
	};
};
