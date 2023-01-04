  //import {  Routes,Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import './App.css';
 import Home from './Home';
 import MultiCorousel from './MultiCorousel';

function App() {
  return (
    // <BrowserRouter>
    //  <Routes>
    //  <Route exact path='/' element={<Home/>}></Route>
    // </Routes>
 
    
    // </BrowserRouter>
    
   <>
   <Home/>
   <MultiCorousel/> 
   </>
   
  
  );
}

export default App;
