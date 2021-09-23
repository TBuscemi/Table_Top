import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import Register from '../../register/Register';


const NotLoggedIn = ({role, setRole}) => {

    
    return (
        <div>
        <Router>
           <Navbar bg="black" variant="dark">
                <NavbarBrand href="">Bag Of Holding</NavbarBrand>
                <Nav>
                   <Nav.Item><Nav.Link href="/home">Home </Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
                    <Switch>
                    <Route path='/register'  exact component={Register}></Route>
                </Switch>
        </Router> 
            
        </div>
    )
}



export default NotLoggedIn;