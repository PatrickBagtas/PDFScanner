import { useState } from 'react'
import { Routes,Navigate,Route,Link } from 'react-router-dom'
import CreateReg from './views/CreateReg'
import LoginReg from './views/LoginReg'
import DocList from './views/DocList'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header></Header>
      <div className='container'>
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
