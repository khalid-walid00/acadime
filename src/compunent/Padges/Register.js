import $ from "jquery"
import axios from "axios"
import { mainapi,Registerr } from "../Api"
import { useState } from "react"
import  Cookie from "cookie-universal"
import { Link, useNavigate } from "react-router-dom"
export default function Register(){

    
const [name,setname]=useState([])
const [email,setemail]=useState()
const [password,setpassword]=useState()
const [password_C,setpassword_c]=useState()
const [alert,setalert]=useState(false)
const nav = useNavigate()
async function sigin(e){
    e.preventDefault()
    try{
        let x=await axios.post(`${mainapi}${Registerr}`,{
            name: name,
            email: email,
            password: password,
        
           })
           const token =x.data.token
           const cookie =Cookie()
           cookie.set("acadime",token)
           setalert(false)
          window.location.pathname="/"
            }catch(err){
        console.log(err)
      if (err.response.status===422){
        setalert(true)
      }else{
        setalert(false)
      }
    }
    } 
   
  
console.log(name[0])
    return(<>
        <div className="container text-center rounded-4 mt-5 " id="reg">

        <div className="row">
            
            <div className="col">
        <div className="col m-3 fs-3 fw-bold textyellow">SIGN IN</div>
        <form onSubmit={sigin}>
        <div className="col m-4 form-floating">
                <input type="text" id="name" className="form-control" placeholder="1" value={name} onChange={e=>setname(e.target.value)}  required/>
                <label>name</label>

            </div>
            
            <div className="col m-4 form-floating">
                <input type="email" id="email" className="form-control" placeholder="1" value={email} onChange={e=>setemail(e.target.value)} required/>
                <label>email</label>

         </div>
      <div className="col m-4 form-floating">
         <input type="password" id="password" className="form-control" placeholder="1"  value={password} onChange={e=>setpassword(e.target.value)}  required/>
             <label>passowrd</label>

            </div>
            <div className="col m-4 form-floating">
                <input type="password" id="password" className="form-control" placeholder="1" value={password_C} onChange={e=>setpassword_c(e.target.value)}   required/>
                <label> confirum passowrd</label>

            </div>
          
            <div className="col m-4 "><button className="btn border border-warning border-1 text-warning  textyellow fs-4 fw-bold">Sign</button></div>
         
            <div className="col m-4 ">
                  <div className="d-flex google-btn bg-warning p-1 rounded-1 w-50">
                <img  className="bg-white rounded-1"></img>
                <a  className="text-decoration-none" href="http://127.0.0.1:8000/login-google">
                    <div className="text-white ms-2 fw-bold">login with google</div>
                </a>
            </div>
               <div className="col m-2 ms-4 text-start"><Link className="icon-link link-secondary" to="/login/studentlogin">you have an account ?..</Link></div>
            </div>
        
            <div className="col " style={{height:"80px"}}>
             {password !==password_C ? <div  className="alert alert-danger alert-dismissible fade show blockquote-footer ">
                   password and confirm_passowrd not the same<button className="btn-close" data-bs-dismiss="alert"></button>
                </div>: name.length <=5 && name[0] && <div id="alert2" className="alert alert-danger alert-dismissible fade show blockquote-footer ">
                   name was small<button className="btn-close" data-bs-dismiss="alert"></button>
                </div>} 
                {alert && <div className=" alert alert-warning alert-dismissible fade show blockquote-footer">
                   email already used <button className="btn-close" data-bs-dismiss="alert"></button></div>}
                </div>
                
             
        </form>
        </div> 
        
        
          <div className="col">
          </div>
         </div>
    
        </div>

  
  </>
        )
    
    
    }