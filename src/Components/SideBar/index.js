import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../../Data/SideBarData';
import db from '../../firebase';
// import Modal from 'react-modal';

const Sidebar = (props) => {
	console.log(props);
	// const [isModalOpen, setIsModalOpen] = useState(false);

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
					<AddIcon onClick={addChannel} />
					{/* <AddIcon onClick={() => setIsModalOpen(true)} /> */}
				</div>
				<div className='sidebar__channel--list'>
					{props.rooms.map((item) => (
						<div className='sidebar__channel--list-name'># {item.name}</div>
					))}
				</div>
			</div>
			{/* <Modal
				isOpen={isModalOpen}
				onRequestClose={() => {
					setIsModalOpen(false);
				}}
				className='modal-container'
				overlayClassName='modal-overlay-center'
				contentLabel='Add Channel'></Modal> */}
		</div>
	);
};

export default Sidebar;
