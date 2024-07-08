import { Link } from "react-router-dom";
import "./register.css"

const Register = () => {
    return ( 
        <div className="register">
            <div className="card">
            <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="loginbutton">Login</button>
          </form>
           </div>

           <div className="card2">
           <span>Do you have an account?</span>
         <Link to="/login" className="button2div">
         <button className="registerbutton">Login</button>
         </Link>
           </div>
        </div>
     );
}
 
export default Register;