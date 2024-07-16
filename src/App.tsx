import { Routes, Navigate, Route } from 'react-router-dom'
import Register from './views/registration.view'
import Login from './views/login.view'
import DocList from './views/DocList'
import Header from './components/Header'
import './App.css'
import { useState } from 'react'

function App() {

  const [userId, setUserId] = useState('');

  function handleUserId(id: string): void {
    setUserId(id);
  }

  return (
    <div className='app'>
      <Header/>
      <div className='container'>

        <Routes>
          <Route path="/" element={<Navigate to="register" />} />
          <Route path="/register" element={<Register setUserId={handleUserId} />} />
          <Route path="/login" element={<Login userId={userId} />} />
          <Route path="/doclist" element={<DocList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
