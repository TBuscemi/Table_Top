import { Container, Nav, Navbar, NavbarBrand, NavLink,} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import Home from '../../home/Home';
import Register from '../../register/Register';
import './NotLoggedIn.css'


const NotLoggedIn = ({role, setRole}) => {

    
    return (
        <div>
        <Router>
           <Navbar bg="black" variant="dark">
                <NavbarBrand id="title" href="">The Bag Of Holding</NavbarBrand>
                <Nav >
                   <Nav.Item><Nav.Link id="textLinks" href="/">Home </Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link id="textLinks" href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link  id="textLinks" href="/register">Register</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/register'  exact component={Register}></Route>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </Router> 
            
        </div>
    )
}



export default NotLoggedIn;