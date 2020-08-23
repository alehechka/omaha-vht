export const OPEN_COLLECTION = 'OPEN_COLLECTION';

interface OpenCollection {
	type: typeof OPEN_COLLECTION;
	state: {
		[key: string]: boolean;
	};
}

export type CollectionActionTypes = OpenCollection;
