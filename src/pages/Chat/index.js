import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SideBar';
import Body from '../../Components/Body';
import Footer from '../../Components/Footer';
import db from '../../firebase';

const Chat = (props) => {
	const [rooms, setRooms] = useState([]);

	const getChannels = () => {
		db.collection('rooms').onSnapshot((snapshot) => {
			setRooms(
				snapshot.docs.map((doc) => {
					return { id: doc.id, name: doc.data().name };
				})
			);
		});
	};

	useEffect(() => {
		getChannels();
	}, []);

	// console.log(rooms);

	return (
		<div>
			<Header header={props.user} />
			<div className='chat__body__container'>
				<Sidebar rooms={rooms} />
				<Body />
			</div>
			<Footer />
		</div>
	);
};

export default Chat;
