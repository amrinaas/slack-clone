import React, { useEffect, useState } from 'react';
import Body from '../../Components/Body';
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

	return (
		<div>
			<div className='chat__body__container'>
				<Body body={props.user} />
			</div>
		</div>
	);
};

export default Chat;
