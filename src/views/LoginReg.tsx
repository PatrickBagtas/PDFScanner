import { Link } from "react-router-dom"
import Register from "./CreateReg"

export default function Login(){
    return(
        <div className="container">
            <div className="form">
                <input type="text" name="email" placeholder="Email"/>
                <input type="text" name="password" placeholder="Password"/>
                <button type="submit" className="btn">Submit</button>
                <Link to={`/Register`}><p className="message">Already registered?</p></Link>
            </div>
            
        </div> 
    )
}