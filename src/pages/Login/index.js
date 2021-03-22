import React from 'react';
import { auth, provider } from '../../firebase';

const Login = (props) => {
	const handleSignIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				const newUser = {
					name: result.user.displayName,
					photo: result.user.photoURL,
				};
				localStorage.setItem('user', JSON.stringify(newUser)); // should use JSON.stringify because localStorage only accept JSOn and string
				props.setUser(newUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className='login__container'>
			<div className='login__content'>
				<div className='login__content--logo'>
					<img src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png' alt='' />
					<h1>Sign In Slack</h1>
					<button onClick={handleSignIn}>Sign In With Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
