
import styles from './Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Skeleton } from '@mui/material';
import WithAuthHoc from '../../Utils/HOC/WithAuthHoc';
import { useContext, useState } from 'react';
import axios from '../../Utils/axios.js';
import { AuthContext } from '../../Utils/AuthContext.jsx';



const Dashboard = () => {
  const [UploadFileText, setUploadFileText] = useState("Upload your resume")
    const [Resumefile, setResumefile] = useState(null)
  const [JobDesc, setJobDesc] = useState("")
  const [loading, setloading] = useState(false)
  // const {login,setlogin,userInfo,setuserInfo}=useContext(AuthContext);
  const {userInfo}=useContext(AuthContext);

  const [result, setresult] = useState(null)
  const HandeleOnChangeFile=(e)=>{
    // console.log(e.target.files[0]);
    setResumefile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
    // setJobDesc(document.getElementById('textarea').value);
    
  }
  const Handleupload =async()=>{
    setresult(null);
      if(!Resumefile || !JobDesc){
        alert("Please upload resume and enter job description");
        return;
      }
      
        const formData=new FormData(); 
        formData.append("resume",Resumefile);
        formData.append("job_Desc",JobDesc);
        formData.append("userId",userInfo._id);
        setloading(true);
        
        
        try{
//           for (let pair of formData.entries()) {
//   console.log(pair[0], pair[1]); //for debugging
// }
          const result=await axios.post('/api/resume/addResume',formData)
          // console.log(result);//debugging
          setresult(result.data.data);
          alert("Resume Analyzed Successfully");
          
        }
        catch(error){
          console.log("Error uploading resume",error);
        }
        finally{
          setloading(false);
        }
        
            }
  
  return (
    <div className={styles.Dashboard}>
   <div className={styles.DashboardLeft}>
    <div className={styles.DashboardHeader}>
      <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
      <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
    </div>
    <div className={styles.alertInfo}>
      <div>Important Instructions</div>
      <div className={styles.DashboardInstructions}>
        <div>Please paste the complete "job description" feild before Submitting</div>
        <div>Only PDF format (.pdf) resumes are accepted</div>
        <div>Ensure that the resume content is clearly visible and not scanned images</div>
      </div>
    </div>

    <div className={styles.DashboardUploadResume}>
      <div className={styles.DashboardUploadResumeBlock}>
        {UploadFileText}
      </div>

       <div className={styles.DashboardInputfeild}>
      <label htmlFor="inputField" className={styles.uploadbutton}>Upload Resume</label>
      <input type="file" accept=".pdf" id='inputField' onChange={HandeleOnChangeFile} />
    </div>
    </div>
     <div className={styles.JobDescriptionSection}>
      <textarea value={JobDesc} onChange={(e)=>{setJobDesc(e.target.value)}} className={styles.textarea} id="" placeholder='Enter Your job description' rows={10} cols={50}></textarea>
     <div className={styles.analyzeAIbutton} onClick={Handleupload}>Analyze</div>
     </div>
   </div>

   <div className={styles.DashboardRight}>
    <div className={styles.DashboardRightTopCard}>
      <div>Analyze With AI</div>
  <img className={styles.profileImg} src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" />
      <h2>Coder</h2>
    </div>

 {
  result  &&   
   <div className={styles.DashboardRightTopCard}>
      <div>Result</div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
      <h1>{result?.score}%</h1>
      <CreditScoreIcon style={{fontSize:50,color:'green'}}/>
      </div>
       <div className={styles.feedbackSection}>
      <h3>Feedback</h3>
      <p>{result?.feedback}</p>
    </div>
    </div>}
{
  loading && <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={280} height={280} />   
}   </div>

    </div>
  )
}

export default WithAuthHoc( Dashboard)