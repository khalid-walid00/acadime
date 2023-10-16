
import axios from "axios";
import { mainapi } from "./compunent/Api";
import Cookie from "cookie-universal"

const cookie=Cookie()
const token =cookie.get("acadime")
export const Axios =axios.create({
    baseURL:mainapi,
    headers: {
        Authorization:"Bearer " + token
    }
})


