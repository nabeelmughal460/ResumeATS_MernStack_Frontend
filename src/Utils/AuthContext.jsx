import { createContext,useState } from "react";
export const AuthContext=createContext();
 const AuthProvider=({children})=>{
    var isLogin=localStorage.getItem('isLogin')
        // const [login, setlogin] = useState(isLogin); optional change
    var userinfodata=localStorage.getItem('userInfo')
    if (isLogin === "false") isLogin = false;  /// extra line add for original
    //   var isLogin = localStorage.getItem('isLogin') === "true"; //optional change
    const [login, setlogin] = useState(isLogin?isLogin:false)
    const [userInfo, setuserInfo] = useState(userinfodata?JSON.parse(userinfodata):null)
    return(
        <AuthContext.Provider value={{login,setlogin,userInfo,setuserInfo}}>
            {children}
            </AuthContext.Provider>
            
    )

 }
 export default AuthProvider;