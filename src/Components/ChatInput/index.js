import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';

const ChatInput = ({ sendMessage }) => {
	const [input, setInput] = useState('');

	const send = (event) => {
		event.preventDefault();
		if (!input) return;
		sendMessage(input);
		setInput('');
	};
	return (
		<div className='chatInput__container'>
			<div className='chatInput__input'>
				<form>
					<input onChange={(event) => setInput(event.target.value)} value={input} type='text' placeholder='Message here...' />
					<div className='chatInput__button'>
						<SendIcon type='submit' onClick={send} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChatInput;
