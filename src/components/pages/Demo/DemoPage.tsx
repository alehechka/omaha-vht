import React from 'react';
import { useSelectedDemo } from 'components/reusable/Hooks';
import { useParams } from 'react-router-dom';
import DemoModel from 'models/Demo';
import { InternalHeader, SmallInternalHeader } from 'components/layout/Header';
import Gallery from './Gallery';
import { scrollToRef } from 'components/reusable/Utils';

interface MatterportProps {
	matterportURL: string;
	name: string;
}
export const MatterportFrame = ({ matterportURL, name }: MatterportProps) => {
	return (
		<>
			<SmallInternalHeader text='Matterport 360 Scan' />
			<section className='iframe-container'>
				<iframe
					className='responsive-iframe'
					src={matterportURL}
					frameBorder='0'
					allowFullScreen
					allow='xr-spatial-tracking'
					title={name}
				/>
			</section>
		</>
	);
};

const DemoPage = () => {
	const scrollRef = React.createRef<HTMLDivElement>();
	const params: any = useParams();
	const demo: DemoModel = useSelectedDemo(params.id);

	React.useEffect(() => {
		demo && scrollToRef(scrollRef);
	}, [scrollRef, demo]);

	return demo ? (
		<div id='main'>
			<InternalHeader text={demo.name} subtext={demo.description} />
			<div className='box container' ref={scrollRef}>
				<MatterportFrame matterportURL={demo.matterportURL} name={demo.name} />
				<br />
				<Gallery gallery={demo.gallery} />
			</div>
		</div>
	) : (
		<div>Demo not found</div>
	);
};

export default DemoPage;
