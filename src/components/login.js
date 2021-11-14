import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router";

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [access,setAccess] = useState('user');
    const [auth,setAuth] = useState(false)

    const onInputChange = (e) =>{
      if(e.target.name == "email"){
          setEmail(e.target.value)
      }
      else if(e.target.name == "password"){
          setPassword(e.target.value)
      }
    }

    const onSubmit = (e) =>{
      var data={
        access:access,
        username:email,
        password:password
      }
      axios.post("http://localhost:3001/login",data)
        .then((res)=>{
          setAuth(res.data)
        })

      e.preventDefault();
    }

    

    if(auth)
    {
      return <Navigate to="/customer_homepage"></Navigate>
    }

    else
      return (
        <div className="Login">
          <div className="loginbg_image">
          <h1>Login!</h1>
          <div class="container">
              <form  class="d-grid  col-6 mx-auto">
              <div class="imgcontainer">
                  <img src="https://avatarfiles.alphacoders.com/127/127739.png" alt="Avatar" class="avatar"/>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input onChange={onInputChange} value={email} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input onChange={onInputChange} value={password} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="  Enter Password" required/>
              </div>
              <br/>
                  <button onClick={onSubmit} type="submit" class="btn btn-danger">Login</button>
                <br/>
                <hr/>
                <h3>OR</h3>
              <button type="button" class="btn btn-danger">Login with Google</button>

              </form>
          </div>
          
        </div>
        </div>
      );
  }
  
  export default Login;