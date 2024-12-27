import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js'
const firebaseConfig = {
apiKey: "AIzaSyCyOmPRz4nyM84CEU_1HRRMGXd1H2RIHvY",
authDomain: "newone-d7056.firebaseapp.com",
databaseURL: "https://newone-d7056-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "newone-d7056",
storageBucket: "newone-d7056.firebasestorage.app",
messagingSenderId: "213579173586",
appId: "1:213579173586:web:adf3be4301856c7baa670b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export the initialized instances
export { app, auth, firestore, db };