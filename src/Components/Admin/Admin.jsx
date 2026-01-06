import React,{useState,useContext,useEffect} from 'react'
import styles from './Admin.module.css'
import { Skeleton } from '@mui/material';
import WithAuthHoc from '../../Utils/HOC/WithAuthHoc';
import axios from '../../Utils/axios.js';


const Admin = () => {
    const [data,setdata]=useState([]);
    const [loader, setLoader] = useState(false)
    useEffect(() => {
      const FetchAllData = async () => {
        try{
          setLoader(true);
          const result=await axios.get(`/api/resume/getResumes`)
          console.log("Admin Data:",result.data.resumes);
          setdata(result.data.resumes);
          // alert(result.data.message,"welcome")

        }catch(error){
          console.log("Error fetching Admin data",error);
          alert("Error fetching Admin data");
        }finally{
          setLoader(false);
        }
      }
    
     
    FetchAllData();
    },[]);
  return (
<div className={styles.Admin}>
  <div className={styles.AdminBlock}>
            { loader &&
              <>
              <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={400} />
              <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={400} />
              <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={400} />
              <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={400} />

              </>
              }   

   {
            data.map((item,index)=>{
              return(
                <div className={styles.AdminCard}>
      <h2>{item?.userId?.name}</h2>
      <p style={{color:'blue'}}>{item?.userId?.email}</p>
      <h3>Score  :{item?.score}%</h3>
      <p>{item?.feedback}</p>
    </div>)
            })

}
  </div>
</div>
  )
}

export default WithAuthHoc (Admin)
