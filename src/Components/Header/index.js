import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = ({ header }) => {
	const signOut = () => {
		localStorage.removeItem('user');
		window.location.reload();
	};
	return (
		<div className='header__container'>
			<div>toggle</div>
			<div className='header__main'>
				<AccessAlarmIcon />
				<div className='header__search'>
					<div className='header__search--input'>
						<input type='text' placeholder='Search...' />
					</div>
				</div>
				<HelpOutlineIcon />
			</div>
			<div className='header__user--container'>
				<div className='header__user--name'>{header.name}</div>
				<div onClick={signOut} className='header__user--image'>
					<img src={header.photo ? header.photo : 'https://i.imgur.com/6VBx3io.png'} alt='profile-picture' />
				</div>
			</div>
		</div>
	);
};

export default Header;
