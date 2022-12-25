import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhm2QM1SvFtFyUSuVgZKlxJw9tXuxTG8U",
  authDomain: "mern-netflix-clone-a8310.firebaseapp.com",
  projectId: "mern-netflix-clone-a8310",
  storageBucket: "mern-netflix-clone-a8310.appspot.com",
  messagingSenderId: "129549144175",
  appId: "1:129549144175:web:1716c43d9458caaa7a7d9a",
  measurementId: "G-JPJ4CQ08ML"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);