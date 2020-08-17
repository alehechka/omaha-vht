import React from 'react';

const Header = () => {
	return (
		<div id='header'>
			<a href='/index.html'>
				<span className='logo icon solid fa-home' style={{ cursor: 'pointer' }}></span>
			</a>
			<h1>Welcome to Omaha Virtual Home Tours</h1>
			<p>Providing high-quality 360 home scans, photography and videography experiences</p>
		</div>
	);
};

export const InternalHeader = ({ text }: { text: string }) => {
	return (
		<header className='major container medium'>
			<h2>{text}</h2>
		</header>
	);
};

export default Header;
