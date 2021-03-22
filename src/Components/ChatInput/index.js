import React from 'react';
import SendIcon from '@material-ui/icons/Send';

const ChatInput = () => {
	return (
		<div className='chatInput__container'>
			<div className='chatInput__input'>
				<form>
					<input type='text' placeholder='Message here...' />
					<div className='chatInput__button'>
						<SendIcon />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChatInput;
