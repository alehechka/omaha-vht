import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { openCollection } from 'store/actions/collectionActions';
// import { createGeneric, updateGeneric, deleteGeneric } from 'store/actions/genericActions';

/**
 * Returns the auth state of the firebase user.
 */
export const useAuth = () => {
	const { auth } = useSelector((state: RootStateOrAny) => state.firebase);
	return auth;
};

/**
 * Returns the full profile of the current user.
 */
export const useCurrentProfile = () => {
	const { profile } = useSelector((state: RootStateOrAny) => state.firebase);

	return profile;
};

const useGenericCollection = (collectionName: string, data?: boolean) => {
	const collection = useSelector((state: RootStateOrAny) => (data ? state.firestore.data : state.firestore.ordered))[
		collectionName
	];
	const dispatch = useDispatch();
	useEffect(() => {
		if (!collection) {
			dispatch(openCollection(collectionName));
		}
	}, [dispatch, collection, collectionName]);

	return collection;
};

/**
 * Returns all demos open to all visitors.
 */
export const useDemos = (data?: boolean) => {
	return useGenericCollection('demos', data);
};

/**
 * Returns a single demo from the provided UID.
 */
export const useSelectedDemo = (demoUID: string) => {
	const demos = useDemos(true);
	return demos?.[demoUID];
};

// const useDispatchCreateGeneric = () => {
// 	const dispatch = useDispatch();
// 	return (collection: string, data: any) => dispatch(createGeneric(collection, data));
// };

// const useDispatchUpdateGeneric = () => {
// 	const dispatch = useDispatch();
// 	return (collection: string, documentUID: string, data: any) => dispatch(updateGeneric(collection, documentUID, data));
// };

// const useDispatchDeleteGeneric = () => {
// 	const dispatch = useDispatch();
// 	return (collection: string, documentUID: string) => dispatch(deleteGeneric(collection, documentUID));
// };

export const useOpenCollections = () => {
	const { collections } = useSelector((state: RootStateOrAny) => state);

	return collections;
};
