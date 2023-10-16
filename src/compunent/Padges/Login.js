import $ from "jquery"
import { useEffect, useState } from "react"
import { Loginn, mainapi } from "../Api"
import axios from "axios"
import  Cookie from "cookie-universal"
import { useNavigate, useParams } from "react-router-dom"
import Loading from "./Loading"
import { Axios } from "../../Axios"
export default function Login(){




const [load,setload]=useState(false)
const [email,setemail]=useState()
const [password,setpassword]=useState()
const [alert,setalert]=useState(false)


async function goin(e){
    e.preventDefault()
    try{
        let x=await axios.post(`${mainapi}${Loginn}`,{
            
            email: email,
            password: password,
           })
           setload(true)
           const token =x.data.token
          const cookie =Cookie()
          cookie.set("acadime",token)   
         window.location.pathname="/"        
    }catch(err){
      setalert(true)
    }
    }

    return(<>
    {load && <Loading email={email}/>}
        <div className="container text-center rounded-4 mt-5 " id="reg">

        <div className="row">
            
            <div className="col text-warning">
        <div className="col m-5 fs-3 fw-bold textyellow">LOGIN</div>
        <form onSubmit={goin} >
        
            <div className="col m-4 form-floating">
                <input type="email" id="email" className="form-control" placeholder="1" s value={email} onChange={e=>setemail(e.target.value)}  required/>
                <label>email</label>

            </div>
            <div className="col m-4 form-floating">
                <input type="password" id="password" className="form-control" placeholder="1" value={password} onChange={e=>setpassword(e.target.value)}   required/>
                <label>passowrd</label>

            </div>
          
            <div className="col m-5 "><button  className="btn border border-warning border-1 text-warning  textyellow fs-4 fw-bold">Login</button></div>
            <div className="col m-5 ">
                  <div className="d-flex google-btn bg-warning p-1 rounded-1 w-50">
                <img  className="bg-white rounded-1"></img>
                <a  className="text-decoration-none"  href="http://127.0.0.1:8000/login-google">
                    <div className="text-white ms-2 fw-bold">login with google</div>
                </a>
            </div>
            
            </div>
        
            <div className="col " style={{height:"80px"}}>
             { alert&& <div id="alert2" className="alert alert-danger alert-dismissible fade show blockquote-footer ">
                    wrong in email or password<button className="btn-close" data-bs-dismiss="alert"></button>
                </div>} 
                </div>
                
             
        </form>
        </div> 
        
        
          <div className="col" id="space">
          </div>
         </div>
    
        </div>

  
  </>
        )
    
    
    }