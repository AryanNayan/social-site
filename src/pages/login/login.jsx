import { Link } from "react-router-dom";
import "./login.css"


const Login = () => {
    return ( 
        <div className="login">
            <div className="card">
            <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="loginbutton">Login</button>
          </form>
           </div>

           <div className="card2">
           <span>Don't you have an account?</span>
         <Link to="/register" className="button2div">
         <button className="registerbutton">Register</button>
         </Link>
           </div>
        </div>
     );
}
 
export default Login;