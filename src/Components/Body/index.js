import React, { useState, useEffect } from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../ChatInput';
import ChatMessage from '../ChatMessage';
import db from '../../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';

const Body = ({ body }) => {
	let { channelId } = useParams();
	const [channel, setChannel] = useState();
	const [messages, setMessages] = useState([]);

	const getMessages = () => {
		db.collection('rooms')
			.doc(channelId)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) => {
				let messages = snapshot.docs.map((doc) => doc.data());
				console.log('message =>', messages);
				setMessages(messages);
			});
	};

	const sendMessage = (text) => {
		if (channelId) {
			let payload = {
				text: text,
				user: body.name,
				userImage: body.photo,
				timestamp: firebase.firestore.Timestamp.now(),
			};
			db.collection('rooms').doc(channelId).collection('messages').add(payload);
			console.log('payload =>', payload);
		}
	};

	const getChannel = () => {
		db.collection('rooms')
			.doc(channelId)
			.onSnapshot((snapshot) => {
				setChannel(snapshot.data()); // snapshot how to we get data, the data of that channel, onSnapshot means whenever the snapshot changes, it'll modify something / called again
				// console.log('Snapshot =>', snapshot.data());
			});
	};

	useEffect(() => {
		getChannel();
		getMessages();
	}, [channelId]);

	return (
		<div className='body__container'>
			<div className='body__header'>
				<div className='body__header__channel'>
					<div className='body__header__channel--name'># {channel && channel.name} </div>
					<div className='body__header__channel--info'>Company-wide announcements and work-based matters</div>
				</div>
				<div className='body__header__channelDetails'>
					<div>Details</div>
					<InfoOutlinedIcon />
				</div>
			</div>
			<div className='body__message'>
				{messages.length > 0 && messages.map((data, index) => <ChatMessage text={data.text} name={data.user} image={data.userImage} timestamp={data.timestamp} />)}
			</div>
			<ChatInput sendMessage={sendMessage} />
		</div>
	);
};

export default Body;
