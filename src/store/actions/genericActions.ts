import {
	GenericActionTypes,
	CREATE_GENERIC,
	CREATE_GENERIC_ERROR,
	UPDATE_GENERIC,
	UPDATE_GENERIC_ERROR,
	DELETE_GENERIC,
	DELETE_GENERIC_ERROR,
} from 'store/types/genericTypes';

interface Functions {
	getFirestore: () => any;
	getFirebase: () => any;
}

export const createGeneric = (collection: string, data: any) => {
	const keys = collection.split('/');
	const key = keys[keys.length - 1];
	return (
		dispatch: (action: GenericActionTypes) => void,
		getState: () => any,
		{ getFirestore }: Functions
	) => {
		const firestore = getFirestore();
		const { id, firstName, lastName } = getState().firestore.ordered.user[0];
		const { profile } = getState().firebase;
		const { organization } = profile;

		firestore
			.collection(`/organizations/${organization}/${collection}`)
			.add({
				...data,
				createdBy: {
					fullName: firstName + ' ' + lastName,
					uid: id,
				},
				createdAt: new Date(),
			})
			.then((docRef: any) => {
				dispatch({ type: CREATE_GENERIC, object: docRef, key });
			})
			.catch((err: Error) => {
				dispatch({ type: CREATE_GENERIC_ERROR, err });
			});
	};
};

export const updateGeneric = (collection: string, document: string, data: any) => {
	const keys = collection.split('/');
	const key = keys[keys.length - 1];
	return (
		dispatch: (action: GenericActionTypes) => void,
		getState: () => any,
		{ getFirestore }: Functions
	) => {
		const firestore = getFirestore();
		const { id, firstName, lastName } = getState().firestore.ordered.user[0];
		const { profile } = getState().firebase;
		const { organization } = profile;

		firestore
			.collection(`/organizations/${organization}/${collection}`)
			.doc(document)
			.update({
				...data,
				updatedBy: {
					fullName: firstName + ' ' + lastName,
					uid: id,
				},
				updatedAt: new Date(),
			})
			.then((docRef: any) => {
				dispatch({ type: UPDATE_GENERIC, object: docRef, key });
			})
			.catch((err: Error) => {
				dispatch({ type: UPDATE_GENERIC_ERROR, err });
			});
	};
};

export const deleteGeneric = (collection: string, document: string) => {
	const keys = collection.split('/');
	const key = keys[keys.length - 1];
	return (
		dispatch: (action: GenericActionTypes) => void,
		getState: () => any,
		{ getFirestore }: Functions
	) => {
		const firestore = getFirestore();
		const { organization } = getState().firebase.profile;
		firestore
			.collection(`/organizations/${organization}/${collection}`)
			.doc(document)
			.delete()
			.then(() => {
				dispatch({ type: DELETE_GENERIC, key });
			})
			.catch((err: Error) => {
				dispatch({ type: DELETE_GENERIC_ERROR, err });
			});
	};
};
