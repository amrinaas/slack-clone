import React from 'react';
import { useHistory } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../../Data/SideBarData';
import db from '../../firebase';

const Sidebar = (props) => {
	console.log(props);

	const history = useHistory();

	const goToChannel = (id) => {
		if (id) {
			console.log('Ini ID', id);
			history.push(`/room/${id}`);
		}
	};
	const addChannel = () => {
		const promptName = prompt('Input your New Channel');
		if (promptName) {
			db.collection('rooms').add({
				name: promptName,
			});
		}
	};

	return (
		<div className='sidebar__container'>
			<div className='sidebar__container__workspace'>
				<div className='sidebar__container__workspace--name'>{props.user.name}</div>
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
					<AddIcon onClick={addChannel} className='addIcon' />
				</div>
				<div className='sidebar__channel--list'>
					{props.rooms.map((item) => (
						<div onClick={() => goToChannel(item.id)} className='sidebar__channel--list-name'>
							# {item.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
