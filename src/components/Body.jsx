import { Outlet,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Navbar from './Navbar';
import {addUser,removeUser} from "../utils/userSlice"


function Body() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        // navigate("/browse");
      }else{
        dispatch(removeUser())
        // navigate("/")
      }
    })
  },[])

  return (
  <>
       <Navbar/>
       <Outlet />
  </>
  )
}

export default Body;
