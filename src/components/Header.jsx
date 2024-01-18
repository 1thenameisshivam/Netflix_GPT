import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {  setToggleGpt} from '../utils/gptSlice';
import { setLanguage } from '../utils/configSlice';
const Header = () => {
  const [searchtoggle,setSearchtoggle]=useState(false)
  const navigate=useNavigate()
  const user=useSelector(store=>store.user);
  function Handlesignout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      
     
      

    }).catch((error) => {
      // An error happened.
    });
  }
  
  const dispatch=useDispatch();

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
 
  // console.log(user)
    function toggleGpt(){
     dispatch(setToggleGpt())
    }
   
    const setlanguage=(e)=>{
        dispatch(setLanguage(e.target.value));
    }
    
    const showlang=useSelector(store=>store.gpt.toggleGpt);
    const toggle=useSelector(store=>store.gpt.toggleGpt)

    const toggle2=searchtoggle;
    function toggleSearch(){
      setSearchtoggle(!searchtoggle)
    }

    // if(!toggle){
    //   return dispatch(clearMovies(null))
    // }

  return (
    <div className='z-10 absolute w-screen  px-8 py-3 bg-gradient-to-b flex-col flex md:flex-row items-center md:justify-between from-black' >
    <img 
    className='w-44'
    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
    
    {user && <div className='flex items-center gap-2' >
     {
       showlang? <select onChange={setlanguage} className='p-1 rounded bg-gray-600 text-white' >
        <option value={"en"} >En-Us</option>
        <option value={"hindi"}>Hindi</option>
        <option value={"german"}>German</option>
      </select>:null
      }
      <button onClick={toggleGpt}  className='bg-red-700 rounded px-4 p-1 text-white' >{toggle?"Homepage":"Gpt Search"}</button>
      <Link to={"/search"} ><button onClick={toggleSearch}  className='bg-red-700 rounded px-4 p-1 text-white' >{toggle2?"Homepage":"Movie Search"}</button></Link>
      
      <p className='text-white' >{user?.displayName}</p>
      <img src='https://occ-0-2164-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201' alt='profile' />
      <p className='text-white cursor-pointer' onClick={Handlesignout} >(Sign-out)</p>
    </div>}
    </div>
  )
}

export default Header