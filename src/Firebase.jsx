
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOWWuAZxuYzEAev9qa4bQFg_2UBFqnlhA",
  authDomain: "fir-5add1.firebaseapp.com",
  projectId: "fir-5add1",
  storageBucket: "fir-5add1.appspot.com",
  messagingSenderId: "253224136357",
  appId: "1:253224136357:web:9c7307b802d8b46ce6674c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);