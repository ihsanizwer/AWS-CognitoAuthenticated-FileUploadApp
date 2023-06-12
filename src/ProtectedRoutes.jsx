import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LogIn } from './components/LogIn';
import { MembersOnly } from './components/MembersOnly';


const getAuth = () => {
  if(localStorage.getItem('token')===null){
    return false;
  }else{
    return localStorage.getItem('token');
  }
}

const ProtectedRoutes = () => {
  const isAuth = getAuth();
  return isAuth ? <MembersOnly/> : <Navigate to="/LogIn"/>
} 

export default ProtectedRoutes