import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faEnvelope, faPhone, faSquareRss} from "@fortawesome/free-solid-svg-icons";
import{faFlickr, faLinkedin, faSquareFacebook, faSquareTwitter }from "@fortawesome/free-brands-svg-icons";
export default function Footer(){
    return(
<>
<div className="bg-light rounded-4">
<div className="row">
    <div className="col text-center">
        <div className="row">
        <img src={require("../img/worldmap.png")}/></div>
        <div className="row">
        <a>Find Us With Google Maps »</a></div>
    </div>
    <div className="col ">
        <div className="row">
            <div>
                  Long Educational Facility Name
                  Address Line 2
                  Town/City
                  Postcode/Zip
            </div>
<div className="my-3">
<FontAwesomeIcon icon={faPhone} style={{color: "#a2a7b3",}} /> *************</div>
</div>
<div> <FontAwesomeIcon icon={faEnvelope} style={{color: "#a2a7b3",}} /> <a>contact@domain.com</a></div>

    </div>
    <div className="col mx-3">
        <div className="row">Stay Up to Date With What's Happening</div>
        <div className="col"><FontAwesomeIcon beatFade  icon={faSquareFacebook} style={{color: "#005eff",fontSize:"40px"}} />
        <FontAwesomeIcon beatFade icon={faSquareTwitter} className="mx-4" style={{color: "#005eff",fontSize:"40px"}} />
        <FontAwesomeIcon beatFade icon={faLinkedin} style={{color: "#005eff",fontSize:"40px"}} />
        <FontAwesomeIcon beatFade icon={faFlickr} className="mx-4" style={{color: "#ff0088",fontSize:"40px"}} />
        <FontAwesomeIcon beatFade icon={faSquareRss} style={{color: "#ff9500",fontSize:"40px"}} /></div>
        <div className="row">Subscribe To Our Newsletter:</div>
        <div className="row"> 
           <div className="btn-group rounde-3 bg-primary-subtle align-items-center my-2" style={{width:"max-content"}}>
            <input type="search" placeholder="Enter your email her" style={{outline:"none"}}  className="border-0 rounded-0 m-1 bg-secondary-subtle "/>
            <div className="bg-primary rounded-end-3"><FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#ffffff",}} /></div>
           </div></div>
         </div>
    
</div>



</div>
<div className="row justify-content-between">
    <a className="col text-decoration-none">Copyright © 2014 - All Rights Reserved -<a href="#" className="text-decoration-none">Domain Name</a> </a>
    <a className="col-3 text-decoration-none">Template by<a href="#" className=" text-decoration-none"> OS Templates</a></a>
</div>
</>

    )
}