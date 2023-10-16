import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css"
import { Link, NavLink } from "react-router-dom";
import Coookie from "cookie-universal"
export default function Header(){


    const cookie = Coookie()
    const token=cookie.get("acadime")
  function del(){
    cookie.remove("acadime")
  }


    return(
<>

<div className="px-4 " style={{zIndex:"-1"}}>
<div className="row " >
    <ul className="nav justify-content-end text-light">
        <li className="navbar-item mx-1">
            <NavLink to="/" className="navbar-link text-decoration-none text-light" style={{fontSize:"small"}}>Home|</NavLink>
        </li>
        <li className="navbar-item mx-1">
            <a className="navbar-link text-decoration-none text-light" style={{fontSize:"small"}}>Concts us|</a>
        </li>
        <li className="navbar-item mx-1">
            <a className="navbar-link text-decoration-none text-light" style={{fontSize:"small"}}>A-z index|</a>
        </li>{ token ? <li className="navbar-item mx-1">
            <NavLink to="/login" onClick={del} className="navbar-link text-decoration-none text-light" style={{fontSize:"small"}}> logout|</NavLink>
        </li>:<> <li className="navbar-item mx-1">
            <NavLink to="/login" className="navbar-link text-decoration-none text-light" style={{fontSize:"small"}}>login|</NavLink>
        </li>
       
            
        </>}
       
    </ul>
</div>
<div className="row my-3">
    <ul className="nav justify-content-between">
        <li className="navbar-brand d-block fs-2 fw-bold text-light">
        Academic Education V2
        <div className="blockquote-footer fs-6 fw-normal mt-1">Free Website Template</div>
        </li>
        <li className="navbar-item">
           <div className="btn-group rounde-3 bg-primary align-items-center">
            <input type="search" placeholder="search her" style={{outline:"none"}} className="border-1 rounded-0 m-1"/>
            <div className="bg-primary rounded-end-3"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></div>
           </div>
        </li>
    </ul>
</div>

<div className="wrapper-sm my-4">

<select className="form-select ">
<option><a className='dropdown-item text-light' href="pages/gallery.html">home</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Pages</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">dropdown</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">linktext</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">anghter linktext</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">his as long link</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">this is the last</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Gallery</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Portfolio</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Full Width</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Sidebar Left</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Sidebar Left 2</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">sidebar Righ</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">Sidebar Right2</a></option>
<option><a className='dropdown-item text-light' href="pages/gallery.html">level2 +drop</a></option>
</select>
</div>
<div className="wrapper-lg">
<div className="row bg-light mx-3 rounded-3 p-2 mb-3">
<ul className="nav text-uppercase justify-content-between  ">
    <li className="navbar-item"><Link className="navbar-link text-decoration-none  a" to="/">home</Link></li>
     <li className="navbar-item ">
     <a className="slid drop text-decoration-none a" href="#">Pages</a>
          <ul >
            <li  className='dropdown-item'><Link to="/gallery" className='dropdown-item text-light' >Gallery</Link></li>
            <li  className='dropdown-item'><Link to="/portfolio" className='dropdown-item text-light' >Portfolio</Link></li>
            <li  className='dropdown-item'><Link to="/fullwidth" className='dropdown-item text-light' >Full Width</Link></li>
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">Sidebar Left</a></li>
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">Sidebar Left 2</a></li>
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">Sidebar Right</a></li>
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">Sidebar Right 2</a></li>
           
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">Basic Grid</a></li>
          </ul>
        </li>

        <li className="navbar-item ">
     <a className="slid drop text-decoration-none a" href="#">dropdown</a>
          <ul >
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">level2</a></li>
            <li  className='dropdown-item'><a className='dropdown-item text-light' href="#">level2 +drop</a></li>

          </ul>
        </li>

    <li className="navbar-item"><a className="navbar-link text-decoration-none a ">linktext</a></li>
    <li className="navbar-item"><a className="navbar-link text-decoration-none a ">anghter linktext</a></li>
    <li className="navbar-item"><a className="navbar-link text-decoration-none a ">this as long link</a></li>
    <li className="navbar-item"><a className="navbar-link text-decoration-none a "> this is the last</a></li>
</ul>
</div>
</div>

</div></>

    )
}   
