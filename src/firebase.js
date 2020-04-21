import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDRMrfwyUz70KcVF5pbR2K7MTFPpaL2HhI",
authDomain: "bookworm-78aea.firebaseapp.com",
databaseURL: "https://bookworm-78aea.firebaseio.com",
projectId: "bookworm-78aea",
storageBucket: "bookworm-78aea.appspot.com",
messagingSenderId: "824817346224",
appId: "1:824817346224:web:1a87c33d8c675b27637d75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;