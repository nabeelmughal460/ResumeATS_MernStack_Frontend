import './App.css'
import Slidebar from './Components/SlideBar/Slidebar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import History from './Components/History/History'
import Admin from './Components/Admin/Admin'
import Logout from './Components/Logout/Logout'
import Login from './Components/Login/Login'
function App() {

  return (
        <div className='App'>
         < BrowserRouter>
        <Slidebar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/logout' element={<Logout/>}/>


        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default App
