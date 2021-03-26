import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import Select from './Components/SelectChannel';
import db from './firebase';

function App() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

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

	const signOut = () => {
		localStorage.removeItem('user');
		window.location.reload();
	};

	// console.log('user in app state', user);
	return (
		<div>
			<Router>
				{!user ? (
					<Login setUser={setUser} />
				) : (
					<div className='app-container'>
						<Header signOut={signOut} user={user} />
						<div className='app-main'>
							<Sidebar rooms={rooms} user={user} />
							<Switch>
								<Route path='/room/:channelId'>
									<Chat user={user} />
								</Route>
								<Route path='/'>
									<Select />
								</Route>
							</Switch>
						</div>
					</div>
				)}
			</Router>
		</div>
	);
}

export default App;
