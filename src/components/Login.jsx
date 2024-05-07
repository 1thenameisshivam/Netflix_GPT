/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validate } from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { BG_LINK } from "../utils/constants";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [form, setForm] = useState(false);
  const [msg, setMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  function formhandler() {
    setForm(!form);
  }

  function handleclick() {
    const msg = validate(email.current.value, password.current.value);
    setMsg(msg);
    if (msg) return;
    if (form) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // sending to redux store
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // console.log(user)
              // ...
            })
            .catch((error) => {
              // An error occurred
              setMsg(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsg(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className="relative">
      <Header />
      <div className=" ">
        <img
          className="md:h-auto h-screen object-cover"
          src={BG_LINK}
          alt="Background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-screen absolute top-36  md:w-3/12 md:absolute md:top-1/2 md:left-1/2  p-12  md:-translate-x-1/2 md:-translate-y-1/2 bg-opacity-85 "
      >
        <h2 className="text-white text-3xl py-4">
          {form ? "Sign Up" : "Sign In"}
        </h2>
        {form ? (
          <input
            ref={name}
            type="text"
            placeholder="Username "
            className=" text-white p-4 my-4 w-full bg-gray-800 rounded"
          ></input>
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address "
          className="text-white p-4 my-4 w-full bg-gray-800 rounded"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" text-white p-4 my-4 w-full  bg-gray-800 rounded "
        ></input>
        <p className="text-red-600 font-bold">{msg}</p>
        <button
          onClick={handleclick}
          className="p-4 my-6 rounded bg-red-700 w-full text-white "
        >
          {form ? "Sign up" : "Sign In"}
        </button>
        <h2 className=" text-gray-600 ">
          {form ? "A Netflix User" : "New to Netflix"}
          <span className="cursor-pointer text-white" onClick={formhandler}>
            {form ? " Sign in now" : " Sign up now."}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
