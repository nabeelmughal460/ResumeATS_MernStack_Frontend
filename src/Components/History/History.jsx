import React,{useState,useEffect, useContext} from 'react'
import styles from './History.module.css'
import { Skeleton } from '@mui/material';
import WithAuthHoc from '../../Utils/HOC/WithAuthHoc';
import axios from '../../Utils/axios.js';
import { AuthContext } from '../../Utils/AuthContext.jsx';

const History = () => {
  const [data,setdata]=useState([]);
  const [loader, setLoader] = useState(false)
  const userInfo=useContext(AuthContext)
  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);
      try{
        const result=await axios.get(`/api/resume/getResumes/${userInfo?._id}`)
      console.log("History Data:",result.data.resumes);
      setdata(result.data.resumes);
      // alert(result.data.message,"welcome")
      }catch(error){
        console.log("Error fetching history data",error);
        // alert("Error fetching history data");
      }
      finally{
        setLoader(false);
      }


    }
    fetchUserData();
  }, []);
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        {loader && 
        <>
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />
        <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={200} />
        
        </>
        
        }   
            { 
            data.map((item,index)=>{
              return(
                <div key={item?._id} className={styles.HistoryCard}>
                <div className={styles.CardPercentage}>{item.score}%</div>
                <h2>{item.job_Desc}</h2>
                <p>{item.resume}</p>
                <p>{item.feedback}</p>
                <p>
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              )
            }) 
            
              }
          
      </div>
    </div>
  )
}

export default WithAuthHoc(History)
//asa
