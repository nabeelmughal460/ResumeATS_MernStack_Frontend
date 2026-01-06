import React, { useContext } from 'react'
import styles from './Login.module.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, googleProvider } from '../../Utils/Firebase.jsx';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../Utils/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios.js';
const Login = () => {

  const {login,setlogin,userInfo,setuserInfo}=useContext(AuthContext);

  const navigate=useNavigate();
  const HandleLogin=async()=>{
try {
    const result=await signInWithPopup(auth,googleProvider);
    // console.log(result);
    const user=result.user;
    const userData={
      name:user.displayName,
      email:user.email,
      photoURL:user.photoURL, 
    }
      await axios.post("/api/user/",userData).then((response)=>{{
        console.log(response);
        setuserInfo(response.data.user);
        localStorage.setItem('userInfo',JSON.stringify(response.data.user));

      }}).catch((error)=>{
        console.log(error);
      } );

    setlogin(true);
    // setuserInfo(userData);
    // localStorage.setItem('isLogin',true);
    localStorage.setItem('isLogin', "true");

    navigate('/dashboard');
    alert("Login Successful");
   
} catch (error) {
  alert("Login Failed");
  console.log(error);
  
}
  }
  return (
    <div className={styles.Login}>
        <div className={styles.LoginCard}>
            <div className={styles.LoginCardTitle}>
                <h1>Login</h1>
                <VpnKeyIcon  />
           </div>
            <div className={styles.googleButton} onClick={HandleLogin}><GoogleIcon sx={{fontSize:20,color:'red'}}/> Sign in With Google</div>
       
          </div>
    </div>
  )
}

export default Login