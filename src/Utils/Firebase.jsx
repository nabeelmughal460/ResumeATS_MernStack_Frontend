import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJh_MjK97L7_0RVJzxMBbZBLHEj3oiMtQ",
  authDomain: "resume-ai-mern.firebaseapp.com",
  projectId: "resume-ai-mern",
  storageBucket: "resume-ai-mern.firebasestorage.app",
  messagingSenderId: "751862818090",
  appId: "1:751862818090:web:cfae4519b95306cf69aa53",
  measurementId: "G-H6D7XFHGDB"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();
 export { auth, googleProvider };
