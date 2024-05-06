// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Details from './screens/viewDetails';
// import UserLogin from './screens/userLogin';
import UserLogin from './screens/userLogin';
import UserSignup from './screens/userSignup';
import PostProperty from './screens/postproperty';
// import UserData from './screens/fetchedata';
// import ProfileDetail from './components/profiledetails';
import UserDetails from './screens/profiledetail';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
     
    <>
    <Router>
     {/* <Home/> */}
     <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/Signup' element={<UserSignup/>}/>
      <Route path='/Login' element={< UserLogin/>}/>
      <Route path='/Postproperty' element={< PostProperty/>}/>
      <Route path='/profileDetail' element={< UserDetails />}/>


     </Routes>


    </Router>
     {/* <Home></Home>
     <Details/> */}
 </>
     
    
      
  );
}

export default App;
