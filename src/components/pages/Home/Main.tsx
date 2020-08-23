import React from 'react';
import { InternalHeader } from '../../layout/Header';
import { Feature, Features } from './Feature';
import { useDemos } from 'components/reusable/Hooks';
import DemoModel from 'models/Demo';

const Main = () => {
	const demos: DemoModel[] = useDemos();
	return (
		<div id='main'>
			<InternalHeader text='Explore some of our work below' />

			<Features>
				{demos?.map((demo, index) => (
					<Feature
						to={`/demo/${demo.id}`}
						icon={demo.icon}
						image={demo.previewImage}
						heading={demo.name}
						description={demo.description}
						side={index % 2 === 0 ? 'left' : 'right'}
						key={index}
					/>
				))}
			</Features>
		</div>
	);
};

export default Main;
