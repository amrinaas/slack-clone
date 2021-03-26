import React from 'react';

const ChatMessage = ({ text, image, timestamp, name }) => {
	return (
		<div className='chatMessage__container'>
			<div className='chatMessage__userPic'>
				<img src={image} alt='' />
			</div>
			<div className='chatMessage__messageContent'>
				<div className='chatMessage__messageContent--name'>
					{name} <span>{new Date(timestamp.toDate()).toUTCString()}</span>
				</div>

				<div className='chatMessage__messageContent--text'>{text}</div>
			</div>
		</div>
	);
};

export default ChatMessage;
