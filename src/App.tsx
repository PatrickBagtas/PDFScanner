import { useState } from 'react'
import { Routes,Navigate,Route,Link } from 'react-router-dom'
import CreateReg from './views/CreateReg'
import LoginReg from './views/LoginReg'
import DocList from './views/DocList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='navbar'>
        <Link to ={`/doclist`}><p>Doc</p></Link>
      </div>
      <div className='container'>
        <h1>PDF Scanner</h1>
        <Routes>
          <Route path="/" element={<Navigate to="register"/>}/>
          <Route path="/register" element={<CreateReg/>}/>
          <Route path="/login" element={<LoginReg/>}/>
          <Route path="/doclist" element={<DocList/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
