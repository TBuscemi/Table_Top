import { Nav, Navbar, NavbarBrand, } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  }from "react-router-dom";
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
            <Router>
            <Navbar bg="black" variant="dark">
                    <NavbarBrand id="title" href="">The Bag Of Holding</NavbarBrand>
                    <Nav >
                    <Nav.Item><Nav.Link id="textLinks" href="/">Home </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link id="textLinks" href="/login">Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link  id="textLinks" href="/register">Register</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link  id="textLinks" href="/tutorials">Tutorials</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path='/register'  exact component={Register}></Route>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/tutorials' exact component={Tutorials}></Route>
                </Switch>
            </Router>           
            </div>
        )
    }
}



export default NotLoggedIn;