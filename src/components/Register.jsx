import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";
import NavBar from "./NavBar";

import ChevronRight from "feather-icons-react/build/IconComponents/ChevronRight";
import ChevronLeft from "feather-icons-react/build/IconComponents/ChevronLeft";
import Footer from "./Footer";
import { Google } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

   //my changes
   const slides = [
    "https://drive.google.com/uc?id=1a6-Yg-Uk1QmSpvsXkpsbz2DeOjYUxmFp",
    "https://drive.google.com/uc?id=11wdgB20ACIuy0qS1x5NS32U2xg9TLLJv",
    "https://drive.google.com/uc?id=1a0wjJ1cUsYGz3qHfm27ooH-11xcRIl29",
  ];
  const Bg2 =
    "https://img.freepik.com/premium-photo/abstract-indigo-background-with-design-space_53876-143838.jpg?w=900";

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    const autoSlide = true
    const autoSlideInterval = 3000

    useEffect(()=>{
      if(!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return ()=>clearInterval(slideInterval)

    })
  //my changes end

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/mentors");
  }, [user, loading]);

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-center bg-blue-100  pt-8 pb-10  ">
        <div className="flex justify-center mt-20 mb-10   w-full  bg-blue-100">
          <div className="myform  w-[700px] flex justify-center items-center bg-white">
            <div className="login p-5 w-[370px]">
              <h1 className="text-4xl  mb-3 font-semibold">Sign Up</h1>
              <p className="mb-10  text-sm font-semibold text-gray-500">
                See your growth and get resulting support!
              </p>
              <button className="w-full" onClick={signInWithGoogle}>
                <div className="flex border border-gray-300 rounded-full p-2 justify-center shadow-md shadow-gray-300">
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2443"
                      height="2500"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 262"
                      id="google"
                    >
                      <path
                        fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      ></path>
                    </svg>
                  </SvgIcon>

                  <div className="pl-2 font-bold  text-gray-600">
                    Sign in with Google
                  </div>
                </div>
              </button>
              <button className="w-full" onClick={signInWithGoogle}>
                <div className="flex border border-gray-300 rounded-full p-2 justify-center shadow-md shadow-gray-300 mt-5">
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="microsoft"
                    >
                      <path
                        fill="#4CAF50"
                        d="M8.5 7.5H16v-7a.5.5 0 0 0-.5-.5h-7v7.5z"
                      ></path>
                      <path
                        fill="#F44336"
                        d="M7.5 7.5V0h-7a.5.5 0 0 0-.5.5v7h7.5z"
                      ></path>
                      <path
                        fill="#2196F3"
                        d="M7.5 8.5H0v7a.5.5 0 0 0 .5.5h7V8.5z"
                      ></path>
                      <path
                        fill="#FFC107"
                        d="M8.5 8.5V16h7a.5.5 0 0 0 .5-.5v-7H8.5z"
                      ></path>
                    </svg>
                  </SvgIcon>
                  <div className="pl-2 font-bold  text-gray-600">
                    Sign in with Microsoft
                  </div>
                </div>
              </button>
              <div className="relative flex py-1 items-center  bg-white mt-5">
                <div className="flex-grow border-t-2 border-gray-300 "></div>
                <span className="flex-shrink mx-2 text-gray-500 text-sm font-semibold">
                  or sign in with email
                </span>
                <div className="flex-grow border-t-2 border-gray-300"></div>
              </div>

              <div className="mt-5 mb-5">
                <div className="font-bold text-gray-600 mb-1">Name*</div>
                <input
                  type="email"
                  className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                  value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
                />
              </div>

              <div className="mt-5 mb-5">
                <div className="font-bold text-gray-600 mb-1">Email*</div>
                <input
                  type="email"
                  className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
              </div>

              <div className="mb-5">
                <div className="font-bold text-gray-600 mb-1">Password*</div>
                <input
                  type="password"
                  className="login__textBox p-3 rounded-full w-full border-solid 
                border border-gray-200 shadow-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex">
                  <input type="checkbox" required className="w-5 h-4 mt-1 mr-1"></input>
                  <div className="text-sm font-bold text-gray-600">
                    I agree to the <span className="text-[#4a7999]">Terms & Conditions</span>
                  </div>
                </div>
                {/* <div>
                  <div className="text-[#4a7999] font-bold text-sm">
                    <Link to="/reset">Forgot Password?</Link>
                  </div>
                </div> */}
              </div>
              <div>
                <button
                  type="button"
                  class="text-white bg-[#4a7999] hover:bg-[#3c6e8f]  font-medium text-sm px-5 py-2.5 me-2 mb-2  w-full rounded-full mt-5 mb-5 shadow-md shadow-gray-400"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>
              </div>
              <div className="text-sm">
                <div>
                  Already have an Account?
                  <span className="font-bold text-[#4a7999] text-sm">
                    <Link to="/login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
            {/* login div ends*/}
          </div>
          <div
            className="photosec  w-[600px] flex justify-center items-center flex-col"
            style={{
              backgroundImage: `url(${Bg2})`,
              backgroundPosition: "center",
            }}
          >
            <div className="overflow-hidden relative m-10 h-[320px] w-[260px] rounded-lg shadow-lg shadow-gray-700">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides.map((s) => (
                  <img src={s} className="h-[400px] object-cover"></img>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <ChevronLeft size={20}></ChevronLeft>
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <ChevronRight size={20}></ChevronRight>
                </button>
              </div>
            </div>
            <div className=" flex  flex-col pb-5 ">
              <div className="pb-3 w-[200px] text-white font-bold text-2xl text-center">
                Turn your ideas into reality
              </div>
              <div className="pb-8 text-white font-semibold  text-center">
                Consistent quality
              </div>
              <div className="dots">
                <div className="flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <div
                      className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Register;
