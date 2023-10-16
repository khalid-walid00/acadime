import FullWidth from "./compunent/FullWidth";
import Gallery from "./compunent/Padges/Gallory";
import Google_call from "./compunent/Padges//Google_call";
import Login from "./compunent/Padges/Login";
import Requir from "./compunent/Padges/Protect";
import Register from "./compunent/Padges/Register";
import Home from "./compunent/Padges/home";
import Portfolio from "./compunent/Portfolio";
import { Route, Routes } from 'react-router-dom';
import Control from "./compunent/Control";
import Protectback from "./compunent/Protectback";
import Error403 from "./compunent/Padges/Error403";
export default function APP(){
  return(
    <div className="container">
    <Routes> 
    <Route path='/*' element={<Error403 />}></Route>
       <Route  element={<Protectback/>}>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
       </Route>
        <Route path="/auth/google/callback" element={<Google_call/>}/> 
          <Route element={<Requir allowrole={["2001","1995"]} />}>
          <Route path="/c" element={<Control/>}/>
              <Route path="/" element={<Home show={["2001","1995"]}  />}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/fullwidth" element={<FullWidth/>}/>
         </Route>
    </Routes>
   
    </div>
    
  )
}