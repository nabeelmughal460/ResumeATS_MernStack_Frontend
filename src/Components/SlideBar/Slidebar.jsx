import React, { useContext } from 'react'
import styles from './Slidebar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utils/AuthContext';
const Slidebar = () => {
  const location=useLocation();
  const navigate=useNavigate();
  console.log(location)
  const {login,setlogin,userInfo,setuserInfo}=useContext(AuthContext);
  const HandleLogout=()=>{
    localStorage.clear();
    setlogin(false);
    setuserInfo(null);
    // localStorage.setItem('isLogin', "false");
    // localStorage.removeItem('userInfo');
  //    localStorage.removeItem('isLogin');
  // localStorage.removeItem('userInfo');

  // Login page par redirect
  // navigate('/', { replace: true });
    navigate('./');
    console.log("Logged Out Successfully");
    // alert("Logged Out Successfully");
    // login=false
  }
  return (
    <div className={styles.Slidebar}>
        <div className={styles.SliderbarICon}>
            <ArticleIcon sx={{fontSize:54,marginBottom:2}}/>
            <div className={styles.SlidebarTopContent}>Resume Screening</div>
            
        </div>
        <Link to={'./dashboard'} className={[styles.SlidebarOptionsBlock,location.pathname==='/dashboard'?styles.selectedOption:null].join(' ')}>
          <DashboardCustomizeOutlinedIcon vx={{fontSize:22}}/>
          <div >
            Dashboard
          </div>
        </Link>
         <Link to={'./history'} className={[styles.SlidebarOptionsBlock,location.pathname==='/history'?styles.selectedOption:null].join(' ')}>
          <HistoryIcon vx={{fontSize:22}}/>
          <div >
            History
          </div>
        </Link>
        {userInfo?.role==="admin" &&
         <Link to={'./admin'} className={[styles.SlidebarOptionsBlock,location.pathname==='/admin'?styles.selectedOption:null].join(' ')}>
          <AdminPanelSettingsOutlinedIcon vx={{fontSize:22}}/>
          <div >
            Admin
          </div>
        </Link>
        
        }
         <Link  className={styles.SlidebarOptionsBlock} onClick={HandleLogout}>
          <LogoutIcon vx={{fontSize:22}}/>
          <div >
            Logout
          </div>
        </Link>
      
    </div>
  )
}

export default Slidebar
