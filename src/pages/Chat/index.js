import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/SideBar';
import Body from '../../Components/Body';
import Footer from '../../Components/Footer';

const Chat = () => {
	return (
		<div>
			<Header />
			<div className='chat__body__container'>
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</div>
	);
};

export default Chat;
