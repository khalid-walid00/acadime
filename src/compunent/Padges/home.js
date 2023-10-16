import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../headers";
import Footer from "../footer";
import { Axios } from "../../Axios";
import { useEffect, useRef, useState } from "react";
import { Tokenuser, cat } from "../Api";
import axios from "axios";
import { json } from "react-router-dom";

export default function Home({show}){

const [role,setrole]=useState()

const [img01,setimg01]=useState([])
const [img02,setimg02]=useState([])
const [img03,setimg03]=useState([])
const [img04,setimg04]=useState([])
const [img05,setimg05]=useState([])
const [img1,setimg1]=useState([])
const [img2,setimg2]=useState([])
const [img3,setimg3]=useState([])
const [img4,setimg4]=useState([])
const [img5,setimg5]=useState([])
const [img6,setimg6]=useState([])
const [img7,setimg7]=useState([])
const [img8,setimg8]=useState([])
const [img9,setimg9]=useState([])
const [img10,setimg10]=useState([])
/////////////////////////////////
const [title1,settitle1]=useState()
const [p1,setp1]=useState()
const [title2,settitle2]=useState()
const [p2,setp2]=useState()
const [title3,settitle3]=useState()
const [p3,setp3]=useState()
const [title4,settitle4]=useState()
const [p4,setp4]=useState()
///////////////////////////////

const [video,setvideo]=useState()


/////////////////////////////
useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/user`).then((data) =>setrole(data.data.role))
     .catch((err) =>console.log(err))
 }, [0])
   
 var arrimg1 = [];
 var arrimg2=[] 
 var arrimg3 =[]
 var arrimg4 =[]
 var arrimg5= []
 var arrimg6 =[] 
 var arrimg7 =[]
 var arrimg8 =[]
 var arrimg9 =[]
 var arrimg10 =[]
 var arrimg11 =[]
 var arrimg01 =[]
 var arrimg02 =[]
 var arrimg03 =[]
 var arrimg04 =[]
 var arrimg05 =[]
 var opj={
    img01:img01,
    img02:img02,
    img03:img03,
    img04:img04,
    img05:img05,
    img1:img1,
    img2:img2,
    img3:img3,
    img4:img4,
    img5:img5,
    img6:img6,
    img7:img7,
    img8:img8,
    img9:img9,
    img10:img10,
    video:video,

 }

 arrimg01.push(opj.img01);
  const showimg01 =window.URL.createObjectURL(new Blob(arrimg01, {type: "application/zip"}))
  arrimg02.push(opj.img02);
  const showimg02 =window.URL.createObjectURL(new Blob(arrimg02, {type: "application/zip"}))
  arrimg03.push(opj.img03);
  const showimg03 =window.URL.createObjectURL(new Blob(arrimg03, {type: "application/zip"}))
  arrimg04.push(opj.img04);
  const showimg04 =window.URL.createObjectURL(new Blob(arrimg04, {type: "application/zip"}))
  arrimg05.push(opj.img05);
  const showimg05 =window.URL.createObjectURL(new Blob(arrimg05, {type: "application/zip"}))
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
  arrimg7.push(opj.img7);
  const showimg7 =window.URL.createObjectURL(new Blob(arrimg7, {type: "application/zip"}))
  arrimg8.push(opj.img8);
  const showimg8 =window.URL.createObjectURL(new Blob(arrimg8, {type: "application/zip"}))
  arrimg9.push(opj.img9);
  const showimg9 =window.URL.createObjectURL(new Blob(arrimg9, {type: "application/zip"}))
  arrimg10.push(opj.img10);
  const showimg10 =window.URL.createObjectURL(new Blob(arrimg10, {type: "application/zip"}))
  arrimg11.push(opj.video);
  const showvideo =window.URL.createObjectURL(new Blob(arrimg11, {type: "application/zip"}))

 localStorage.setItem("name",JSON.stringify(showimg8))

  const clone01=useRef(null)
  const clone02=useRef(null)
  const clone03=useRef(null)
  const clone04=useRef(null) 
    const clone05=useRef(null)
const clone1=useRef(null)
const clone2=useRef(null)
const clone3=useRef(null)
const clone4=useRef(null) 
  const clone5=useRef(null)
  const clone6=useRef(null)
  const clone7=useRef(null)
  const clone8=useRef(null)
  const clone9=useRef(null)
  const clone10=useRef(null)
  const clonevideo=useRef(null)
    function simg01(){
    clone01.current.click()}
    function simg02(){
    clone02.current.click()}
    function simg03(){
    clone03.current.click()}
    function simg04(){
   clone04.current.click()}
    function simg05(){
    clone05.current.click()}
    ////////////////////
  function simg1(){
    clone1.current.click()}
    function simg2(){
    clone2.current.click()}
    function simg3(){
    clone3.current.click()}
    function simg4(){
   clone4.current.click()}
  //////////////
 
 function simg5(){
 clone5.current.click()}
 function simg6(){
 clone6.current.click()}
 function simg7(){
 clone7.current.click()}
 function simg8(){
 clone8.current.click()}
 function simg9(){
    clone9.current.click()}
    function simg10(){
    clone10.current.click()}
    function svideo(){
        clonevideo.current.click()}


      
    return(<>
        <Header/>
        <form onSubmit>
        <div className="my-4">
    <div className="bg-light rounded-4 p-3 text-center mb-4" style={{height:"max-content"}}>
    <div id="slide" className="carousel slide" data-bs-ride="carousel">
    <div className="position-absolute mass m-5 p-3 z-1 rounded-3 " style={{left:"700px"}}>
    <div className="row mb-2 fs-5" style={{fontSize:"13px"}}>{role==="2001" ?<textarea value={title3} onChange={e=>settitle3(e.target.value)} maxLength={60} className="text-secondary border-0" style={{backgroundColor:"transparent",outline:"none",resize:"none"}} >
                        Enter the title of the article</textarea> :<div>{title3}</div>}</div>

                       <p className="m-0 " style={{fontSize:"12px"}}>{role==="2001" ?<textarea value={p3} onChange={e=>setp3(e.target.value)} maxLength={100} className="text-secondary border-0" style={{backgroundColor:"transparent",outline:"none"}} >
                        Enter the title of the article</textarea> :<div>{p3}</div>}</p>
    </div>
  <div className="carousel-inner">
    <div className="carousel-item  active "data-bs-interval="500">
       
      <img src={showimg01} onClick={simg01} className="bigimg" style={{width:"100%",height:"350px"}}  />
      {role ==="2001" && <input type="file" className="d-none" ref={clone01} onChange={(e)=> setimg01(...e.target.files)} />}
    </div>
    <div className="carousel-item " data-bs-interval="1000">
    <img src={showimg02} onClick={simg02} className="bigimg" style={{width:"100%",height:"350px"}}  />
      {role ==="2001" && <input type="file" className="d-none" ref={clone02} onChange={(e)=> setimg02(...e.target.files)} />}
    </div>
    
    <div className="carousel-item " data-bs-interval="1500">
    <img src={showimg03} onClick={simg03} className="bigimg" style={{width:"100%",height:"350px"}}  />
      {role ==="2001" && <input type="file" className="d-none" ref={clone03} onChange={(e)=> setimg03(...e.target.files)} />}
    </div>
    
    <div className="carousel-item " data-bs-interval="2000">
    <img src={showimg04} onClick={simg04} className="bigimg" style={{width:"100%",height:"350px"}}  />
      {role ==="2001" && <input type="file" className="d-none" ref={clone04} onChange={(e)=> setimg04(...e.target.files)} />}
    </div>
   
    <div className="carousel-item " data-bs-interval="2500" >
    <img src={showimg05} onClick={simg05} className="bigimg" style={{width:"100%",height:"350px"}}  />
      {role ==="2001" && <input type="file" className="d-none" ref={clone05} onChange={(e)=> setimg05(...e.target.files)} />}
    </div>
    </div>
 
  <div className="carousel-indicators  position-relative m-0 rounded-4 mt-2" style={{backgroundColor:"#DEDACB",boxShadow:"1px 1px 5px 0px black, -1px -1px 5px 0px black"}}>
    
    <button type="button" style={{width:"400px" ,height:"100px",backgroundColor:"#06213F",margin:"1px",textIndent:"0px",color:"white" ,borderTopLeftRadius:"15px",borderBottomLeftRadius:"15px"}} data-bs-target="#slide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">All About The University</button>
   
    <button type="button" style={{width:"400px" ,height:"100px",backgroundColor:"#06213F",margin:"1px",textIndent:"0px",color:"white"}} data-bs-target="#slide" data-bs-slide-to="1" aria-label="Slide 2">Why You Should Study With Us</button>
   
    <button type="button" style={{width:"400px" ,height:"100px",backgroundColor:"#06213F",margin:"1px",textIndent:"0px",color:"white"}} data-bs-target="#slide" data-bs-slide-to="2" aria-label="Slide 3">Education And Student Experience</button>
   
    <button type="button" style={{width:"400px" ,height:"100px",backgroundColor:"#06213F",margin:"1px",textIndent:"0px",color:"white"}} data-bs-target="#slide" data-bs-slide-to="3" aria-current="true" aria-label="Slide 1">Alumni And Its Donors</button>
    
    <button type="button" style={{width:"400px" ,height:"100px",backgroundColor:"#06213F",margin:"1px",textIndent:"0px",color:"white" ,borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}} data-bs-target="#slide" data-bs-slide-to="4" aria-label="Slide 2">Latest University News & Events</button>
  </div>
</div></div><div className="row bg-light rounded-4 p-4">
     
        <div className="col">
            <div className="row" >
<a className="text-decoration-none" href="#">Propisitivew Student</a>
<hr></hr>
<div className="text-center p-0 " style={{border:"8px groove #e7eeed",width:"min-content",}}>
    <div className="firstcolimg">
<img  className="cursor" src={showimg1} onClick={simg1}  width={"220px"} height={"95px"}/></div></div>
</div>{role==="2001" &&<input type="file" ref={clone1} className="form-control m-2 w-50 d-none" onChange={e=>setimg1(...e.target.files)}/>
} <div className="row" >
<a className="text-decoration-none" href="#">Propisitivew Student</a>
<hr></hr>
<div className="text-center p-0" style={{border:"8px groove #e7eeed",width:"min-content"}}>
<div className="firstcolimg">
<img className="cursor" src={showimg2}  onClick={simg2} width={"220px"} height={"95px"}/></div></div>
</div>{role==="2001" &&<input type="file" ref={clone2} className="form-control m-2 w-50 d-none" onChange={e=>setimg2(...e.target.files)}/>
}
<div className="row" >
<a className="text-decoration-none" href="#">Propisitivew Student</a>
<hr></hr>
<div className="text-center p-0" style={{border:"8px groove #e7eeed",width:"min-content"}}>
<div className="firstcolimg">
<img className="cursor" src={showimg3} onClick={simg3} width={"220px"} height={"95px"}/></div></div>
</div>{role==="2001" &&<input type="file" ref={clone3} className="form-control m-2 w-50 d-none" onChange={e=>setimg3(...e.target.files)}/>
}
<div className="row" >
<a className="text-decoration-none" href="#">Propisitivew Student</a>
<hr></hr>
<div className="text-center p-0" style={{border:"8px groove #e7eeed",width:"min-content"}}>
<div className="firstcolimg">
<img className="cursor" src={showimg4} onClick={simg4} width={"220px"} height={"95px"}/></div></div>
</div>{role==="2001" &&<input type="file" ref={clone4} className="form-control m-2 w-50 d-none" onChange={e=>setimg4(...e.target.files)}/>
}
 </div>
        <div className="col">
            <div className="row">
                <div className="row">Latest News & Events</div>
                <hr></hr>
                <div className="row">
                    <div className="col text-center"style={{height:"max-content"}}>
                        <div className="text-center p-0 firstcolimg" style={{border:"5px groove #e7eeed",width:"min-content"}}>
                        
                    {role==="2001" &&<img  src={showimg5}  onClick={simg5}  width={"120px"} height={"120px"} className="cursor"/>}

                    </div><input type="file" ref={clone5} className="d-none" onChange={e=>setimg5(...e.target.files)}/>
                    </div>
                    <div className="col" style={{height:"max-content"}}>
                       <div className="row mb-2 fs-5" style={{fontSize:"13px"}}>{role==="2001" ?<textarea value={title1} onChange={e=>settitle1(e.target.value)}
                        maxLength={60} style={{border:"0px",backgroundColor:"transparent",outline:"none",resize:"none"}} >
                        Enter the title of the article</textarea> :<div>{title1}</div>}</div>

                       <p className="m-0 " style={{fontSize:"12px"}}>{role==="2001" ?<textarea value={p1} 
                       onChange={e=>setp1(e.target.value)} maxLength={100} style={{border:"0px",backgroundColor:"transparent",outline:"none"}} >
                        Enter the title of the article</textarea> :<div>{title1}</div>}</p>

                       </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col"style={{height:"max-content"}}>
                        <div className="text-center p-0 firstcolimg" style={{border:"5px groove #e7eeed",width:"min-content"}}>
                        {role==="2001" &&<img  src={showimg6}  onClick={simg6}  width={"120px"} height={"120px"} className="cursor"/>}
                    </div>
                    <input type="file" ref={clone6} className="d-none" onChange={e=>setimg6(...e.target.files)}/>
                    </div>
                    <div className="col" style={{height:"max-content"}}>
                       <div className="row mb-2 fs-5" style={{fontSize:"13px"}}>{role==="2001" ?<textarea value={title2} onChange={e=>settitle2(e.target.value)} maxLength={60} style={{border:"0px",backgroundColor:"transparent",outline:"none",resize:"none"}} >
                        Enter the title of the article</textarea> :<div>{title2}</div>}</div>

                       <p className="m-0 " style={{fontSize:"12px"}}>{role==="2001" ?<textarea value={p1} onChange={e=>setp2(e.target.value)} maxLength={100} style={{border:"0px",backgroundColor:"transparent",outline:"none"}} >
                        Enter the title of the article</textarea> :<div>{p2}</div>}</p>

                       </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col"style={{height:"max-content"}}>
                        <div className="text-center p-0 firstcolimg" style={{border:"5px groove #e7eeed",width:"min-content"}}>
                        {role==="2001" &&<img  src={showimg7}  onClick={simg7}  width={"120px"} height={"120px"} className="cursor"/>}
                    </div>
                    <input type="file" ref={clone7} className="d-none" onChange={e=>setimg7(...e.target.files)}/>
                    </div>
                    <div className="col" style={{height:"max-content"}}>
                       <div className="row mb-2 fs-5" style={{fontSize:"13px"}}>{role==="2001" ?<textarea value={title3} onChange={e=>settitle3(e.target.value)} maxLength={60} style={{border:"0px",backgroundColor:"transparent",outline:"none",resize:"none"}} >
                        Enter the title of the article</textarea> :<div>{title3}</div>}</div>

                       <p className="m-0 " style={{fontSize:"12px"}}>{role==="2001" ?<textarea value={p3} onChange={e=>setp3(e.target.value)} maxLength={100} style={{border:"0px",backgroundColor:"transparent",outline:"none"}} >
                        Enter the title of the article</textarea> :<div>{p3}</div>}</p>

                       </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col"style={{height:"max-content"}}>
                        <div className="text-center p-0 firstcolimg" style={{border:"5px groove #e7eeed",width:"min-content"}}>
                        {role==="2001" &&<img  src={showimg8}  onClick={simg8}  width={"120px"} height={"120px"} className="cursor"/>}
                    </div>
                    <input type="file" ref={clone8} className="d-none" onChange={e=>setimg8(...e.target.files)}/>
                    </div>
                    <div className="col" style={{height:"max-content"}}>
                       <div className="row mb-2 fs-5" style={{fontSize:"13px"}}>{role==="2001" ?<textarea value={title4} onChange={e=>settitle4(e.target.value)} maxLength={60} style={{border:"0px",backgroundColor:"transparent",outline:"none",resize:"none"}} >
                        Enter the title of the article</textarea> :<div>{title4}</div>}</div>

                       <p className="m-0 " style={{fontSize:"12px"}}>{role==="2001" ?<textarea value={p4} onChange={e=>setp4(e.target.value)} maxLength={100} style={{border:"0px",backgroundColor:"transparent",outline:"none"}} >
                        Enter the title of the article</textarea> :<div>{p4}</div>}</p>

                       </div>
                </div>
                <hr></hr>
                <div className="row"><a className="text-decoration-none text-info" href="#">Click here to view all of the latest news and events »</a></div>
            </div>

        </div>
        <div className="col">
            <div className="row">
                <div className="row text-center">Latest News & Events</div>
                <hr></hr>
                
               <video style={{border:"8px groove #e7eeed",padding:"0px"}} onContextMenu={svideo} src={showvideo} controls muted autoPlay/>
              <input type="file" className="d-none" ref={clonevideo} onChange={e=>setvideo(...e.target.files)}/>
            </div>
               <div className="row mt-5">
               <div className="row text-center">
                <div className="row text-secondary"> Quick Information</div>
                <hr></hr>

                <div className="row my-3 p-0 ms-2"style={{backgroundColor:"#faebd7"}}>
                <div className="firstcolimg  p-0"style={{width:"max-content",}}><img className="cursor" src={showimg9}
                onClick={simg9} style={{width:"80px",height:"80px", border:"3px groove #e7eeed",padding:"0px"}}/></div>
                <div className="col align-self-center fw-bold fs-5" > Make An Application</div>
                <input type="file" className="d-none" ref={clone9} onChange={e=>setimg9(...e.target.files)}/>
               </div>
               <div className="row my-3 p-0 ms-2"style={{backgroundColor:"#faebd7"}}>
                
                <div className="firstcolimg  p-0"style={{width:"max-content",}} ><img 
                src={showimg10} className="cursor" onClick={simg10} style={{width:"80px",height:"80px", border:"3px groove #e7eeed",padding:"0px"}}/></div>
                  <input type="file" className="d-none" ref={clone10} onChange={e=>setimg10(...e.target.files)}/>
                <div className="col align-self-center fw-bold fs-5" >  Order A Prospectus</div>
               </div>
                </div></div>
        </div>
        <div className="row p-3 rounded-3" style={{backgroundColor:"#06213F"}}>
            <div className="col-4 d-block text-center border-end">
                
                <FontAwesomeIcon icon={faTwitter} style={{color: "#3a76df",fontSize:"3rem"}}/>
                <div className="text-info">Follow Us On Twitter</div>
                </div>
                <div className="col text-light textcenter fw-bold">Inteligula congue id elis donec sce sagittis intes id laoreet aenean. Massawisi 
                condisse leo sem ac tincidunt nibh quis dui fauctor et donecnibh elis velit<span className="text-info"> @name</span> - 10:15 AM yesterday</div>
        </div>
        <div className="row mt-3">
            <div className="row text-secondary">Quickly Find What You Are Looking For</div>
            <hr></hr>
            <div className="row" style={{fontSize:"14px"}}>
                <div className="col d-block">
                    <div className="row">
                    <a href="#" className="text-decoration-none text-info">Academic Advisory</a>
                    <a href="#" className="text-decoration-none text-info">Academic Assistance</a>
                    <a href="#" className="text-decoration-none text-info">Academic Calendars</a>
                    <a href="#" className="text-decoration-none text-info">Academics Office</a>
                    <a href="#" className="text-decoration-none text-info">Administration</a>
                    <a href="#" className="text-decoration-none text-info">Adult Learners</a>
                    <a href="#" className="text-decoration-none text-info">Alumni Chapters</a>
                    <a href="#" className="text-decoration-none text-info">Alumni Events</a>
                    <a href="#" className="text-decoration-none text-info">Athletics</a>
                    <a href="#" className="text-decoration-none text-info">Campus Life At a Glance</a>
                    <a href="#" className="text-decoration-none text-info">Campus Recreation</a>
                    <a href="#" className="text-decoration-none text-info">Campus Safety & Security</a>
                    </div>
                </div>
                <div className="col d-block">
                    <div className="row">
                    <a href="#" className="text-decoration-none text-info">Class Schedules</a>
                    <a href="#" className="text-decoration-none text-info">Counselling Center</a>
                    <a href="#" className="text-decoration-none text-info">Course Descriptions & Catalogue</a>
                    <a href="#" className="text-decoration-none text-info">Department Directory</a>
                    <a href="#" className="text-decoration-none text-info">Departments & Programs</a>
                    <a href="#" className="text-decoration-none text-info">Fellowships</a>
                    <a href="#" className="text-decoration-none text-info">Finals Schedules</a>
                    <a href="#" className="text-decoration-none text-info">Financial Aid</a>
                    <a href="#" className="text-decoration-none text-info">Fitness and Recreation Facilities</a>
                    <a href="#" className="text-decoration-none text-info">Global Learning</a>
                    <a href="#" className="text-decoration-none text-info">Graduate</a>
                    <a href="#" className="text-decoration-none text-info">Graduate Admissions</a>
                    </div>
                </div>
                <div className="col d-block">
                    <div className="row">
                    <a href="#" className="text-decoration-none text-info">Graduate Health Services</a>
                    <a href="#" className="text-decoration-none text-info">Graduate Housing</a>
                    <a href="#" className="text-decoration-none text-info">Graduate Programs</a>
                    <a href="#" className="text-decoration-none text-info">Graduate Student Association</a>
                    <a href="#" className="text-decoration-none text-info">Graduate Studies</a>
                    <a href="#" className="text-decoration-none text-info">Honours Program</a>
                    <a href="#" className="text-decoration-none text-info">Interactive Schedule</a>
                    <a href="#" className="text-decoration-none text-info">International Programs</a>
                    <a href="#" className="text-decoration-none text-info">International Students</a>
                    <a href="#" className="text-decoration-none text-info">Intramural Sports</a>
                    <a href="#" className="text-decoration-none text-info">Language Resources</a>
                    <a href="#" className="text-decoration-none text-info">Maps and Directions</a>
                    </div>
                </div>
                <div className="col d-block">
                    <div className="row">
                    <a href="#" className="text-decoration-none text-info">Office of the Registrar</a>
                    <a href="#" className="text-decoration-none text-info">Online Learning</a>
                    <a href="#" className="text-decoration-none text-info">Parent Information</a>
                    <a href="#" className="text-decoration-none text-info">Residence Life</a>
                    <a href="#" className="text-decoration-none text-info">Residential Colleges</a>
                    <a href="#" className="text-decoration-none text-info">Schools and Colleges</a>
                    <a href="#" className="text-decoration-none text-info">Student Activities</a>
                    <a href="#" className="text-decoration-none text-info">Student Affairs</a>
                    <a href="#" className="text-decoration-none text-info">Student Development</a>
                    <a href="#" className="text-decoration-none text-info">Student Financial Services</a>
                    <a href="#" className="text-decoration-none text-info">Student Group Directory</a>
                    <a href="#" className="text-decoration-none text-info">Student Life</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
    {role==="2001"&& <button type='submit' className="btn btn-warning">SAVE</button>}
    </form>

    <Footer/>
    </>)
}