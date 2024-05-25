// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDkO5yg927Eyhh7ckDliac9j5fji9HLLkQ",
	authDomain: "wagestack-5fda3.firebaseapp.com",
	projectId: "wagestack-5fda3",
	storageBucket: "wagestack-5fda3.appspot.com",
	messagingSenderId: "527785914832",
	appId: "1:527785914832:web:b1f6296126f389686a89d5",
	measurementId: "G-BPYBQFMY5E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
