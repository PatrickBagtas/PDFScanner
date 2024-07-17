import { Routes, Navigate, Route } from 'react-router-dom'
import Register from './views/registration.view'
import Login from './views/login.view'
import DocList from './views/DocList'
import Header from './components/Header'
<<<<<<< HEAD
import './App.css'
import { useState } from 'react'
=======

>>>>>>> c8df23c8238d86ffaafe8043b12aea02718b3176

function App() {

  const [userId, setUserId] = useState('');

  function handleUserId(id: string): void {
    setUserId(id);
  }

  return (
    <div className='app'>
<<<<<<< HEAD
      <Header/>
      <div className='container'>

=======
      <Header></Header>
      <div className='container'>
>>>>>>> c8df23c8238d86ffaafe8043b12aea02718b3176
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
