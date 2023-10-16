import Coookie from "cookie-universal"
import { Outlet } from "react-router-dom"
export default function Protectback() {

   const cookie = Coookie()
   const token=cookie.get("acadime")

   return(

   token ?window.history.back() :<Outlet/>
   
   
   
   
   
   )
 
 
 
 
 }