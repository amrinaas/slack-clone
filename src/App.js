import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

	console.log('user in app state', user);
	return (
		<div>
			<Router>
				{!user ? (
					<Login setUser={setUser} />
				) : (
					<Switch>
						<Route path='/room'>
							<Chat user={user} />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
