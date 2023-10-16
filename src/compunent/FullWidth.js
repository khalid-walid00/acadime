import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import Header from "./headers";
import Footer from "./footer";
import { useState } from "react";
import { Axios } from "../Axios"
import axios from "axios";

export default function FullWidth(){

  


const [title,settitle]=useState()
const [description,sedescription]=useState()
const [About,setAbout]=useState()


async function Addpro(e){
    e.preventDefault()  
    const data =new FormData()
    data.append("title",title)
    data.append("description",description)
    data.append("About",About)
        try{    
            const x= await Axios.post(`http://127.0.0.1:8000/api/product/add`,data)   
            console.log(x)
        }catch(err){
      console.log(err)
        }
    } 
    return(<>
    <Header/>
  
    <div className="row bg-light rounded-3 p-4 my-4">
        <div className="row fs-4 fw-bold">Make a complaint</div>
        <hr/>
        <form onSubmit={Addpro}>
        <div className="row">
            <div className="col ">
                <div className="form-floating">
                    <input className="form-control " value={title} onChange={(e)=>settitle(e.target.value)}  placeholder="name"/>
                    <label>Name</label>
                </div>
            </div>
            <div className="col ">
                <div className="form-floating">
                    <input className="form-control"  value={description} onChange={(e)=>sedescription(e.target.value)}  placeholder="name"/>
                    <label>Email</label>
                </div>
            </div>
            <div className="col ">
                <div className="form-floating">
                    <input className="form-control"  placeholder="name"/>
                    <label>Website</label>
                </div>
            </div>
        </div>
        <div className="row my-5">
            <div className="form-floating p-0" > 
            <textarea placeholder="disacrip the problem"  value={About} onChange={(e)=>setAbout(e.target.value)} name="description"  style={{height:"200px"}}className="form-control" rows={7}  />
            <label>discrip the problem</label>
        </div>
        </div>
        <div className="row">
            <button type="submit" className="btn btn-secondary me-3" style={{width:"max-content"}}>send</button> 
             <button type="reset" className="btn btn-secondary"  style={{width:"max-content"}}>reset</button>
        </div>
        </form>

        <div className="row shadow-lg my-4" style={{backgroundColor:"#efe6e4"}}>
            <div className="row">
                <div className="col">
                    <div className="fs-5 text-info">By......</div>
                    <div className="size14 text-secondary">Friday, 6th April 2045 @08:15:00</div>
                </div>
                <div className="col-1"><FontAwesomeIcon icon={faUserSecret} style={{color: "#000000",}} /></div>
            </div>
            <div className="row">This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking</div>

        </div>
         </div>
    
    
    
    <Footer/>
    </>)}