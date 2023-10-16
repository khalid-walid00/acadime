import Footer from "../footer";
import Header from "../headers";

export default function Gallery(){
    return(<>
   <Header/>
    <div className="row bg-light rounded-3 p-4 my-4">
   <div className="row text-secondary">Latest Images From The University</div>
   <hr/>
   <div className="row">
    <div className="col">
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>

    </div>
    <div className="col">
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>

    </div>
    <div className="col">
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>

    </div>
    <div className="col">
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>
        <img className="m-4" width={"180px"} style={{border:"8px groove #e7eeed"}} src={require("../../img/2.png")}/>

    </div>
    
   </div>
   <div className="row text-secondary">Gallery Description Goes Here</div>

    </div>
  
    
    <Footer/>
    </>)


}
