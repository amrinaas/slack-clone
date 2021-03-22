import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../ChatInput';
import ChatMessage from '../ChatMessage';

const Body = () => {
	return (
		<div className='body__container'>
			<div className='body__header'>
				<div className='body__header__channel'>
					<div className='body__header__channel--name'># Channel </div>
					<div className='body__header__channel--info'>Company-wide announcements and work-based matters</div>
				</div>
				<div className='body__header__channelDetails'>
					<div>Details</div>
					<InfoOutlinedIcon />
				</div>
			</div>
			<div className='body__message'>
				<ChatMessage />
			</div>
			<ChatInput />
		</div>
	);
};

export default Body;
