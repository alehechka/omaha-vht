import React from 'react';
import { useForm } from 'react-hook-form';

const adamEmail = 'ajlehechka@gmail.com';
const ryanEmail = 'ryan.a.bahn@gmail.com';

const toEmails = [ryanEmail, adamEmail];

const mailto = toEmails.reduce((acc, email) => `${email}; ${acc}`, '');

const EmailForm = () => {
	const { handleSubmit, register } = useForm();

	const openEmailClient = ({ name, subject, message }: any) => {
		setTimeout(() => {
			window.open(`mailto:${mailto}?subject=${subject}&body=Hi, this is ${name}. \n${message}`);
		}, 320);
	};

	return (
		<form onSubmit={handleSubmit(openEmailClient)}>
			<div className='row'>
				<div className='col-6 col-12-mobilep'>
					<input type='text' name='name' placeholder='Name' ref={register} />
				</div>
				<div className='col-6 col-12-mobilep'>
					<input type='text' name='subject' placeholder='Subject' ref={register} />
				</div>
				<div className='col-12'>
					<textarea name='message' placeholder='Message' ref={register} rows={6}></textarea>
				</div>
				<div className='col-12'>
					<ul className='actions special'>
						<li>
							<input type='submit' value='Send Message' />
						</li>
					</ul>
				</div>
			</div>
		</form>
	);
};

const MessageForm = () => {
	return (
		<>
			<header className='major last'>
				<h2>Feel free to reach out to schedule an appointment!</h2>
			</header>

			<p>
				We're always trying to find new clients to work with and provide our beautiful 360 scans and
				photography to. Fill out the form below to send us an email.
			</p>
			<EmailForm />
		</>
	);
};

export default MessageForm;
