import { Routes, Route, Link,NavLink} from "react-router-dom";
import Home from '../../home/Home';
import Login from '../../login/Login';
import Register from '../../register/Register';
import './NotLoggedIn.css'
import { Component } from 'react';
import Tutorials from '../../tutorials/Tutorials';


class NotLoggedIn extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        console.log(this.props.userId)
        console.log(this.props.user)

      }

    render(){
        return (
            <div>  
                <NavLink to="/">Home </NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/tutorials">Tutorials</NavLink>

                <Routes>
                    <Route path='/register'  element={<Register/>}/>
                    <Route  path="/" element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/tutorials' element={<Tutorials/>}/>
                </Routes>          
            </div>
        )
    }
}



export default NotLoggedIn;