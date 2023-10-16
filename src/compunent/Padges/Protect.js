import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal"
import { useEffect, useState } from "react";
import { Tokenuser } from "../Api";

import Loading from "./Loading";
import { Axios } from "../../Axios";
import Error403 from "./Error403";
const cookie = Cookie()
const token = cookie.get("acadime")

export default function Requir({allowrole}) {

   const allow =allowrole
console.log(token) 
const nav =useNavigate()

const Navigate =useNavigate()
    const [user, setuser] = useState("")
    const [role, setrole] = useState("")

    useEffect(() => {
       Axios.get(`http://127.0.0.1:8000/api/user`).then((data) =>(  setuser(data.data),setrole(data.data.role)))
        .catch((err) =>(console.log(err),nav("/login" ,{state:true})))
    }, [0])
    return token ? (

        user === "" ? (<Loading/>) : allow.includes(role) ?(<Outlet/>) :<Error403 allow={role} />

    ) : (<Navigate to={"/login"} replace={true} />)






}