import {useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthContext.jsx';

const WithAuthHoc = (WrappedComponent ) => {
  return (props)=>{
        const  {setlogin}=useContext(AuthContext);
    const navigate=useNavigate();
    useEffect(()=>{
      const isLogin=localStorage.getItem('isLogin');
        if(!isLogin){
            setlogin(false);
            navigate('/');
            return;
        }
    },[navigate])
     return <WrappedComponent  {...props} />;
  }
}

export default WithAuthHoc