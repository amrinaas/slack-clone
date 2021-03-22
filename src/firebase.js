import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBArN-2X6z2aSLuWXQ8E3ACLeXBQgsmRi0',
	authDomain: 'slack-clone-a34f1.firebaseapp.com',
	projectId: 'slack-clone-a34f1',
	storageBucket: 'slack-clone-a34f1.appspot.com',
	messagingSenderId: '632290633746',
	appId: '1:632290633746:web:09d54edd9db96e5e6110cb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
