import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { removeUser } from './utils/userSlice';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  
  const dispatch=useDispatch();
  const navigate = useNavigate()
  useEffect(()=>{
       onAuthStateChanged( auth , (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          
          navigate("/brouse")
         } else {
           dispatch(removeUser());
           navigate("/")
          }
        });
  },[])

  return (
    <>

    </>
  )
}

export default App
