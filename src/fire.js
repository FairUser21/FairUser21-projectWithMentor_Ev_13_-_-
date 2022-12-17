import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHz1OF4Ci5EoNZTD1G3A688CBaLTm9W88",
  authDomain: "projectwithmentor-ed048.firebaseapp.com",
  projectId: "projectwithmentor-ed048",
  storageBucket: "projectwithmentor-ed048.appspot.com",
  messagingSenderId: "987712565489",
  appId: "1:987712565489:web:734c38d2d41224099a3950",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
