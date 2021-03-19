import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path='/room' component={Chat} />
					<Route exact path='/' component={Login} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
