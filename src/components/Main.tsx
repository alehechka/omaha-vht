import React from 'react';
import { InternalHeader } from './Header';
import { FeatureLeft, FeatureRight, Features } from './Feature';

const Main = () => {
	return (
		<div id='main'>
			<InternalHeader text='Explore some of our work below' />

			<Features>
				<FeatureLeft
					to='/house.html#scroll-point'
					icon='fa-home'
					image='images/Bahn-Family-Household/Bahn-Family-Household-Living-Room(1).jpg'
					heading='Large Multi-floor household'
					description='View a true test of the capabilities of taking 360 imagry in mapping out and exploring a large scale home.'
				/>
				<FeatureRight
					to='/apartment.html#scroll-point'
					icon='fa-building'
					image='images/Gold-Coast-Square/Gold-Coast-Square-08132020_185640.jpg'
					heading='Single Bedroom Apartment'
					description='View the simplicity of a smaller apartment to see how a 360 view can make a small unit seem huge.'
				/>
			</Features>
		</div>
	);
};

export default Main;
