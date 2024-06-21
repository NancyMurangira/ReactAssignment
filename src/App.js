import {Routes, Route, Link} from 'react-router-dom';
import Login from "./Login";
import Users from "./Users";
// import { Link } from 'react-router-dom';
import LoginLink from './LoginLink';


export const Introduction = () => {
  return <h1> We are Adalab </h1>;
  
}
function App(){
    return(
       <div>
        <LoginLink/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<Users/>}/>

      {/* <Login/>  */}
        {/* <Users/> */}
        </Routes>
      </div>
    );
};
export default App;

