import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCE35OEeTGBw6HsVkGl73xnCY989znJ4Ys",
  authDomain: "discord-clone-yt.firebaseapp.com",
  databaseURL: "https://discord-clone-yt.firebaseio.com",
  projectId: "discord-clone-yt",
  storageBucket: "discord-clone-yt.appspot.com",
  messagingSenderId: "1009639771910",
  appId: "1:1009639771910:web:ded4a3b3f26d44a4489887",
  measurementId: "G-HJ43RQR7D2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
