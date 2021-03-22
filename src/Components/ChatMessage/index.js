import React from 'react';

const ChatMessage = () => {
	return (
		<div className='chatMessage__container'>
			<div className='chatMessage__userPic'>
				<img src='https://randomuser.me/api/portraits/women/79.jpg' alt='' />
			</div>
			<div className='chatMessage__messageContent'>
				<div className='chatMessage__messageContent--name'>
					Amanda <span>2/23/2021 11:13:55 AM</span>
				</div>

				<div className='chatMessage__messageContent--text'>This is the best challenge</div>
			</div>
		</div>
	);
};

export default ChatMessage;
