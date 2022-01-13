import 'tailwindcss/tailwind.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from "./login";
import Loading from "../components/Loading";
import firebase from "firebase";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [user, loading] = useAuthState(auth);



  //*trigger this every time a user is logging in/out
  useEffect(() => {
    if(user) {
        db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        }, 
        { merge: true }
      );
    }
  }, [user])

  //*if the next app is loading show Loading component
  if (loading) return <Loading />;

  //*if user is not logged in show Login page
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
