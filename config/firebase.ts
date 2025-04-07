// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdlUPB46anJPJVBNfI4VMhsDmXtbRPwcM",
  authDomain: "expense-tracker-56483.firebaseapp.com",
  projectId: "expense-tracker-56483",
  storageBucket: "expense-tracker-56483.firebasestorage.app",
  messagingSenderId: "1095446126523",
  appId: "1:1095446126523:web:7b8acbfb25f79fd3136e9e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
