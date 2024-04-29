// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Details from './screens/viewDetails';
// import UserLogin from './screens/userLogin';
// import UserLogin from './screens/userLogin';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
     
    <>
    <Router>
     {/* <Home/> */}
     <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>



     </Routes>


    </Router>
     {/* <Home></Home>
     <Details/> */}
 </>
     
    
      
  );
}

export default App;
