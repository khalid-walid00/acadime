 
 import $ from "jquery"
import Header from "./headers"
import Footer from "./footer"
import { useEffect, useRef, useState } from "react"
import { Axios } from "../Axios"
 
export default function Portfolio(){
  const [role,setrole]=useState()
  
   useEffect(() => {
      Axios.get(`http://127.0.0.1:8000/api/user`).then((data) =>setrole(data.data.role))
       .catch((err) =>console.log(err))
   }, [0])
     
   
  
   
  /* 
function more1(){
   let m1 = document.getElementById("1")
   let more1 =document.getElementById("more1")
    m1.classList.toggle("more1")
    more1.classList.toggle("more1")
   
}
function more2(){
    
   let m2 = document.getElementById("2")
   let more2 =document.getElementById("more2")
    m2.classList.toggle("more1")
    more2.classList.toggle("more1")
    
   
}
function more3(){
   
  
   let m3 = document.getElementById("3")
   let more3 =document.getElementById("more3")
m3.classList.toggle("more1")
more3.classList.toggle("more1")

   
}
function more4(){
   
   let m4 = document.getElementById("4")
   let more4 =document.getElementById("more4")
m4.classList.toggle("more1")
more4.classList.toggle("more1") 

}
function more5(){

   let m5 = document.getElementById("5")
   let more5 =document.getElementById("more5")   
m5.classList.toggle("more1")
more5.classList.toggle("more1")
   
}
function more6(){
   
 
   let m6 = document.getElementById("6")
   let more6 =document.getElementById("more6")  
m6.classList.toggle("more1")
more6.classList.toggle("more1")
   
}*/
const [img1,setimg1]=useState([])
const [img2,setimg2]=useState([])
const [img3,setimg3]=useState([])
const [img4,setimg4]=useState([])
const [img5,setimg5]=useState([])
const [img6,setimg6]=useState([])

const [title1,settitle1]=useState()
const [p1,setp1]=useState()
const [title2,settitle2]=useState()
const [p2,setp2]=useState()
const [title3,settitle3]=useState()
const [p3,setp3]=useState()
const [title4,settitle4]=useState()
const [p4,setp4]=useState()
const [title5,settitle5]=useState()
const [p5,setp5]=useState()
const [title6,settitle6]=useState()
const [p6,setp6]=useState()

const [p12,setp12]=useState()
const [p22,setp22]=useState()
const [p33,setp33]=useState()
const [p44,setp44]=useState()
const [p55,setp55]=useState()
const [p66,setp66]=useState()
/////////////////////////////////
var arrimg1 = [];
var arrimg2=[] 
var arrimg3 =[]
var arrimg4 =[]
var arrimg5 =[]
var arrimg6 =[]
var opj={
   img1:img1,
   img2:img2,
   img3:img3,
   img4:img4,
   img5:img5,
   img6:img6,
}
arrimg1.push(opj.img1);
  const showimg1 =window.URL.createObjectURL(new Blob(arrimg1, {type: "application/zip"}))
  arrimg2.push(opj.img2);
  const showimg2 =window.URL.createObjectURL(new Blob(arrimg2, {type: "application/zip"}))
  arrimg3.push(opj.img3);
  const showimg3 =window.URL.createObjectURL(new Blob(arrimg3, {type: "application/zip"}))
  arrimg4.push(opj.img4);
  const showimg4 =window.URL.createObjectURL(new Blob(arrimg4, {type: "application/zip"}))
  arrimg5.push(opj.img5);
  const showimg5 =window.URL.createObjectURL(new Blob(arrimg5, {type: "application/zip"}))
  arrimg6.push(opj.img6);
  const showimg6 =window.URL.createObjectURL(new Blob(arrimg6, {type: "application/zip"}))



  const clone1=useRef(null)
  const clone2=useRef(null)
  const clone3=useRef(null)
  const clone4=useRef(null) 
  const clone5=useRef(null)
  const clone6=useRef(null)
    //////////////
    function simg1(){
      clone1.current.click()}
      function simg2(){
      clone2.current.click()}
      function simg3(){
      clone3.current.click()}
      function simg4(){
     clone4.current.click()}
     function simg5(){
      clone5.current.click()}
      function simg6(){
     clone6.current.click()}
     
/*
<textarea  value={p12} onChange={e=>setp12(e.target.value)}>for more</textarea>

<textarea  value={p22} onChange={e=>setp22(e.target.value)}>for more</textarea>

<textarea  value={p33} onChange={e=>setp33(e.target.value)}>for more</textarea> 

<textarea  value={p44} onChange={e=>setp44(e.target.value)}>for more</textarea>*/
    return(<>
    <Header/>
    <div className="row bg-light rounded-3 p-2 my-3 text-center">
       <div className="col">
         <div className="row mt-5 justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0"  src={showimg1}  onClick={simg1}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone1} onChange={(e)=>setimg1(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title1} onChange={e=>settitle1(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center  text-center"> Enter the title of the article</textarea>:<div>{title1}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p1} onChange={e=>setp1(e.target.value)}  className="text-secondary size14 border-0">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p1}<div id="1" className="more1">{p12}</div></div>}
         
         
         </div>
         <div className="row mt-5 justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0"  src={showimg2}  onClick={simg2}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone2} onChange={(e)=>setimg2(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title2} onChange={e=>settitle2(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center"> Enter the title of the article</textarea>:<div>{title2}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p2} onChange={e=>setp2(e.target.value)}  className="text-secondary size14 border-0">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p2}<div id="2" className="more1">{p22}</div></div>}
         
         
         </div>
         <div className="row mt-5 justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0"  src={showimg3}  onClick={simg3}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone3} onChange={(e)=>setimg3(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title1} onChange={e=>settitle3(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center"> Enter the title of the article</textarea>:<div>{title3}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p3} onChange={e=>setp3(e.target.value)}  className="text-secondary size14 border-0">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p3}<div id="3" className="more1">{p33}</div></div>}
       
         
         </div>
        </div>



        <div className="col">
         <div className="row mt-5 justify-content-center justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0"  src={showimg4}  onClick={simg4}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone4} onChange={(e)=>setimg4(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title4} onChange={e=>settitle4(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center text-center"> Enter the title of the article</textarea>:<div>{title4}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p4} onChange={e=>setp4(e.target.value)}  className="text-secondary size14 border-0 text-end">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p4}<div id="4" className="more1">{p44}</div></div>}
         
         
         </div>
         <div className="row mt-5 justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0"  src={showimg5}  onClick={simg5}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone5} onChange={(e)=>setimg5(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title5} onChange={e=>settitle5(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center"> Enter the title of the article</textarea>:<div>{title5}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p5} onChange={e=>setp5(e.target.value)}  className="text-secondary size14 border-0 text-end">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p5}<div id="5" className="more1">{p55}</div></div>}
        
         
         </div>
         <div className="row mt-5 justify-content-center">
        <img  style={{border:"8px groove #e7eeed",width:"400px",height:"193px"}} className="bigimg p-0 "  src={showimg6}  onClick={simg6}/>
        {role==="2001" && <input type="file" className="d-none" ref={clone6} onChange={(e)=>setimg6(...e.target.files)}/>  }
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}} value={title6} onChange={e=>settitle6(e.target.value)} className=" fs-5 fst-italic fw-bold border-0 text-center"> Enter the title of the article</textarea>:<div>{title6}</div>}
        
        <hr/>
        {role ==="2001"?<textarea style={{outline:"none",backgroundColor:"transparent",resize:"none"}}  value={p6} onChange={e=>setp6(e.target.value)}  className="text-secondary size14 border-0 text-end">Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article Enter the text of the article
         </textarea>:<div>{p6}<div id="3" className="more1">{p66}</div></div>}
         
         
         </div>
        </div>










       </div>
    
    
    <Footer/>
    </>)}
   