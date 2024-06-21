import { Link } from "react-router-dom";
import './index.css';


function LoginLink(){
    return(
        <div>
            <nav>
                <h1> Welcome to my App </h1>
                <h1> Please click Login to start </h1>
                <button type='submit'><Link to="/login"> Login </Link></button>
            </nav>
        </div>
    )
}
export default LoginLink;