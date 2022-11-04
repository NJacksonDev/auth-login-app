import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import './App.css';

export default function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  return (
    <Routes>
    {user
    ? <Route path="*" element={<Profile token={token} set={setUser} user={user}/>} />
    : <>
      <Route path="/signup" element={<Signup setToken={setToken} setUser={setUser}/>}/>
      <Route path ="*" element={<Login setUser ={setUser}/>} />
    </>
  
    } 
    </Routes>
  );
}
