import React from 'react';
import MessageForm from './MessageForm';

const Footer = () => {
	return (
		<div id='footer'>
			<div className='container medium'>
				<MessageForm />

				<ul className='copyright'>
					<li>&copy; L&amp;B Holdings LLC. All rights reserved.</li>
					<li>DBA: Omaha Virtual Home Tours</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
