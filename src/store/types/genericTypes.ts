export const CREATE_GENERIC = 'CREATE_GENERIC';
export const CREATE_GENERIC_ERROR = 'CREATE_GENERIC_ERROR';
export const UPDATE_GENERIC = 'UPDATE_GENERIC';
export const UPDATE_GENERIC_ERROR = 'UPDATE_GENERIC_ERROR';
export const DELETE_GENERIC = 'DELETE_GENERIC';
export const DELETE_GENERIC_ERROR = 'DELETE_GENERIC_ERROR';

interface CreateAction {
	type: typeof CREATE_GENERIC;
	key: string;
	object: any;
}

interface CreateActionError {
	type: typeof CREATE_GENERIC_ERROR;
	err: Error;
}

interface UpdateAction {
	type: typeof UPDATE_GENERIC;
	key: string;
	object: any;
}

interface UpdateActionError {
	type: typeof UPDATE_GENERIC_ERROR;
	err: Error;
}

interface DeleteAction {
	type: typeof DELETE_GENERIC;
	key: string;
}

interface DeleteActionError {
	type: typeof DELETE_GENERIC_ERROR;
	err: Error;
}

export type GenericActionTypes =
	| CreateAction
	| CreateActionError
	| UpdateAction
	| UpdateActionError
	| DeleteAction
	| DeleteActionError;
