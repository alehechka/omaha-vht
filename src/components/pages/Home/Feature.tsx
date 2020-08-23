import React from 'react';

interface FeatureSideProps {
	to: string;
	icon: string;
	image: string;
	heading: string;
	description: string;
}

interface FeatureProps extends FeatureSideProps {
	side: 'left' | 'right';
}

export const Feature = ({ to, icon, image, heading, description, side }: FeatureProps) => {
	return (
		<section className={`feature ${side}`}>
			<a href={to} className={`image icon solid ${icon}`}>
				<img src={image} alt='' style={{ height: '400px' }} />
			</a>
			<div className='content'>
				<h3>{heading}</h3>
				<p>{description}</p>
			</div>
		</section>
	);
};

export const FeatureLeft = (props: FeatureSideProps) => {
	return <Feature side='left' {...props} />;
};

export const FeatureRight = (props: FeatureSideProps) => {
	return <Feature side='right' {...props} />;
};

export const Features = ({ children }: any) => {
	return <div className='box alt container'>{children}</div>;
};
