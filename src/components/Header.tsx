import { Link } from "react-router-dom"


export default function Header(){

    return(
        <div className='navbar'>
        <Link to ={`/doclist`}><p>Doc</p></Link>
    </div>
    )
}