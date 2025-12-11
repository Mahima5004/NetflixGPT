import { useRef, useState } from 'react';
import { LOGIN_BG_IMG } from '../utils/constant';
import { Link } from 'react-router-dom';
import {validateForm} from "../utils/validateForm"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../utils/firebase"

function Login() {
  
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isRemember, setIsRemember] = useState(true);
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const pwdRef = useRef(null);
  const confirmPwdRef = useRef(null);


  const toggleForm = () => {
    setIsLoginForm(!isLoginForm)
  }

  const handleValidation = () => {
  let errorMessage;

  if (isLoginForm) {
    errorMessage = validateForm(emailRef.current.value, "", pwdRef.current.value, "");
  } else {
    errorMessage = validateForm(
      emailRef.current.value,
      userNameRef.current?.value || "",
      pwdRef.current.value,
      confirmPwdRef.current?.value || ""
    );
  }

  if (errorMessage) {
    setError(errorMessage);
    return
  } else {
    setError("");
    if(!isLoginForm){
      //Signup logic
     createUserWithEmailAndPassword(auth, emailRef.current.value, pwdRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User signed up: ", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage + " " + errorCode);
  });
    }else{
      //Login logic
      signInWithEmailAndPassword(auth, emailRef.current.value, pwdRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("User logged in: ", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage + " " + errorCode);
  });

    }
  }

};



  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src={LOGIN_BG_IMG}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full"
      />
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      
      <div className="relative z-10 flex justify-center items-center min-h-screen py-10">
        <div className="bg-black bg-opacity-70 p-10 rounded-md w-full max-w-md text-white">
          <h1 className="text-3xl font-semibold mb-6">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            {
              !isLoginForm &&
              <input
              ref={userNameRef}
              type="text"
              name="name"
              placeholder="Full Name"
              className="p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-400"
            />
            }
            <input
              ref={emailRef}
              type="text"
              name="user-cred"
              placeholder="Email Id"
              className="p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-400"
            />
            <input
              ref={pwdRef}
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-400"
            />

            {!isLoginForm && <input
              ref={confirmPwdRef}
              type="password"
              name="password"
              placeholder="Confirm password"
              className="p-3 rounded-md bg-gray-800 placeholder-gray-400 border border-gray-400"
            />}

            <p className='py-4 m-4 text-xl text-red-500'>{error}</p>

            <button className="bg-red-600 hover:bg-red-700 p-3 rounded-md font-semibold cursor-pointer" onClick={handleValidation}>
              {isLoginForm? "Sign In" : "Sign Up"}
            </button>

            {isLoginForm && <div className="text-center text-gray-400">OR</div>}

            {isLoginForm && <button className="bg-gray-600 hover:bg-gray-700 p-3 rounded-md font-semibold cursor-pointer">
              Use a sign-in code
            </button>}

            {isLoginForm && <Link to="#" className="text-blue-500 hover:underline text-sm text-center">
              Forgot password?
            </Link>
            }

            <div className="flex items-center space-x-2">
              <input type="checkbox" name="remember" className="w-5 h-5" checked = {isRemember} onChange={(e) => setIsRemember(e.target.checked)} />
              <label htmlFor="remember" className="text-md">Remember me</label>
            </div>
          </form>

          <p className="text-sm text-gray-400 mt-6">
            {isLoginForm ? "New to Netflix" : "Already a User"}? <Link to="#" className="text-white hover:underline" onClick={toggleForm}>{isLoginForm ? "Sign up now." : "Sign in now"}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
