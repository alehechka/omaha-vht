import { useFirestoreConnect } from 'react-redux-firebase';
import { useOpenCollections } from 'components/reusable/Hooks';

const getFirestoreQueries = (collections: { [key: string]: boolean }) => {
	let queries: any[] = [];
	const { demos } = collections;
	demos && queries.push({ collection: 'demos', storeAs: 'demos' });
	return queries;
};

const FirestoreProvider = ({ children }: { children: any }) => {
	const collections = useOpenCollections();
	const queries = getFirestoreQueries(collections);

	useFirestoreConnect(queries);

	return children;
};

export default FirestoreProvider;
