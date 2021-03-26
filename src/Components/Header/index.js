import React, { useState } from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Header = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	const signOut = () => {
		localStorage.removeItem('user');
		window.location.reload();
	};

	return (
		<div className='header__container'>
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
				<div className='header__user--name'>{props.user && props.user.name}</div>
				<div className='header__user--image'>
					<Dropdown isOpen={dropdownOpen} toggle={toggle}>
						<DropdownToggle style={{ border: 'none', backgroundColor: 'transparent' }}>
							<img className='img-dropdown' src={props.user && props.user.photo ? props.user.photo : 'https://i.imgur.com/6VBx3io.png'} alt='profile-picture' />
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem onClick={signOut}>Log Out</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default Header;
