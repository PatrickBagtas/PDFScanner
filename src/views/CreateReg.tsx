
import React from "react"
import { Link } from "react-router-dom"

export default function Register(){
    return(
        <div className="container">
            <div className="form">
                <input type="text" name="username" placeholder="Username"/>
                <input type="text" name="password" placeholder="Password"/>
                <button type="submit" className="btn">Login</button>
                <Link to={`/Login`}><p className="message">Already registered?</p></Link>
            </div>
        </div>
    )
}