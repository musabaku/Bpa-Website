import React, { Fragment, useEffect, useState } from "react";
import "./AdminLogin.css";
// import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {login} from "../../../redux/actions/userAction";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {loading,error,isAuthenticated}  = useSelector((state)=>state.user)


  // const [loginEmail, setloginEmail] = useState("");
  // const [loginPassword, setloginPassword] = useState("");

  const defaultEmail = "musabadmin1@gmail.com"
  const defaultPassword = "musabadmin1234"

  const [loginEmail, setloginEmail] = useState(defaultEmail);
  const [loginPassword, setloginPassword] = useState(defaultPassword);


useEffect(()=>{
if(error){
  toast.error(error)
  // dispatch(clearErrors())
}
if(isAuthenticated){
  navigate(`/`)

}
},[dispatch,error,isAuthenticated,navigate])

  const loginSubmit = (e) => {
    e.preventDefault()
    dispatch(login(loginEmail,loginPassword))
    console.log("Login Form Submitted");
  };


  return (
    <Fragment>
      {loading? (<Loader/>) :
    (<Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p>ADMIN-LOGIN</p>

            </div>
            
          <div class="about-design">
                <div class="sideb-line"></div>
                <div class="middleb-line"></div>
                <div class="sideb-line"></div>
              </div>
          </div>

          <form onSubmit={loginSubmit} className="loginForm" >
            <div className="loginEmail">
              <input
                value={loginEmail}
                placeholder="Email"
                onChange={(e) => setloginEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div className="loginPassword">
              <input
                value={loginPassword}
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setloginPassword(e.target.value)}
              />
            </div>
            <input className="loginBtn" type="submit" value="Login" />
          </form>


     
        </div>
      </div>
    </Fragment>)
}
    </Fragment>

  );
};

export default AdminLogin;