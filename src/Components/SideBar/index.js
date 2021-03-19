import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../../Data/SideBarData';

const Sidebar = () => {
	return (
		<div className='sidebar__container'>
			<div className='sidebar__container__workspace'>
				<div className='sidebar__container__workspace--name'>Riri</div>
				<div className='sidebar__container__workspace--message'>
					<AddCircleOutlineIcon />
				</div>
			</div>
			<div className='sidebar__main'>
				{sidebarItems.map((item) => (
					<div className='sidebar__main--items'>
						{item.icon}
						{item.text}
					</div>
				))}
			</div>
			<div className='sidebar__channel'>
				<div className='sidebar__channel--new'>
					<div>Channels</div>
					<AddIcon />
				</div>
				<div className='sidebar__channel--list'>
					<div className='sidebar__channel--list-name'># Channel 1</div>
					<div className='sidebar__channel--list-name'># Channel 2</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
