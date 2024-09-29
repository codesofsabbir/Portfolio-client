import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../src/Hooks/UserContext';

function Protected() {
    const {login} = useContext(UserContext)
    if (!login) {
      return <Navigate to="/login" />;
  }
  return <Outlet />

}

export default Protected
