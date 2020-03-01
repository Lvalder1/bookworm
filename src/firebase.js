import firebase from "firebase";

const firebaseConfig = {
apiKey: "AIzaSyCAM9YrdvZD1WNi9-1OUkUPeTxxKS6emaU",
authDomain: "bookworm-bea6b.firebaseapp.com",
databaseURL: "https://bookworm-bea6b.firebaseio.com",
projectId: "bookworm-bea6b",
storageBucket: "bookworm-bea6b.appspot.com",
messagingSenderId: "560491841960",
appId: "1:560491841960:web:cd774f42657d83ead3359d"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;