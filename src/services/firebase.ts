import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config/constants';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const googleProvider: () => firebase.auth.GoogleAuthProvider = () => {
  const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/drive');

  return provider;
};

export const signInWithPopup: (
  provider: firebase.auth.GoogleAuthProvider
) => any = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);

    const credential: firebase.auth.OAuthCredential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...

    console.log(token);
    console.log(user);

    return {
      token,
      user,
    };
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...

    return null;
  }
};
