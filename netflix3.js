import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react";
import axios from "axios"; 
const Login =() =>{
  // const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('') ;
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')) {
      navigate.push("/dashboard")
    }
  },[])
  async function onSignInClickHandler (){
    console.log(email,password)
    let item = {email,password };
    let result = await fetch(" https://demo.credy.in/api/v1/usermodule/login/",{
    method : 'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(item)
  });
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringigy(result));
  navigate.push('/dashboard');

  


      
    // e.preventDefault();
          //  navigate('/dashboard')
              
   }
   const emailOnChangeHandler = (e) =>{
       setEmail(e.target.value)
   }
//    const passwordOnChangeHandler = (e) =>{
//     setPassword(e.target.value)
// }



 



      return( 
        <div className="login">
          <div className="holder">
            <h1 className="text-white">Sign In</h1>
            <br/>
            {/* <form  onSubmit > */}
            <form> 
              <input className="form-control" value={email} onChange = {emailOnChangeHandler} type="email"  placeholder="Email"/>
              <input 
              className="form-control" 
              value={password} onChange = {(e) => setPassword(e.target.value)} 
              type="password"  
              placeholder="Password"/>
              <button className="btn btn-danger btn-block" onClick={onSignInClickHandler }>Sign In</button>
              <br/>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-white" htmlF or="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </form>
            <br/>
            <br/>
            {/* { isUserExist && <p className="text-danger">User does not exist | Go for Signup</p> }
            { isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p> } */}
            <div className="login-form-other">
              <div className="login-signup-now">
              New to Netflix? &nbsp;
                <a className=" " target="_self" herf="/">
                Sign up now
                </a>.
              </div>  
            </div>
          </div>
          <div className="shadow"></div>
          <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
      )
    }
    
export default Login; 


 