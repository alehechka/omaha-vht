import React from 'react';

const Header = () => {
	return (
		<div id='header'>
			<a href='/'>
				<span className='logo icon solid fa-home' style={{ cursor: 'pointer' }}></span>
			</a>
			<h1>Welcome to Omaha Virtual Home Tours</h1>
			<p>Providing high-quality 360 home scans, photography and videography experiences</p>
		</div>
	);
};

interface InternalProps {
	text: string;
	subtext?: string;
}
export const InternalHeader = ({ text, subtext }: InternalProps) => {
	return (
		<header className='major container medium'>
			<h2>{text}</h2>
			{subtext && <p>{subtext}</p>}
		</header>
	);
};

export const SmallInternalHeader = ({ text }: InternalProps) => {
	return (
		<header>
			<h3>{text}</h3>
		</header>
	);
};

export default Header;
