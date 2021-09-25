import { Container, Nav, Navbar, NavbarBrand, NavLink,} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }from "react-router-dom";
import Home from '../../home/Home';
import Account from '../../account/Account';
import './LoggedIn.css'
import Chat from '../../chat/Chat';
import RegisterChat from '../../chat/registerChat/RegisterChat';


const LoggedIn = ({role, setRole}) => {

    
    return (
        <div>
        <Router>
           <Navbar bg="black" variant="dark">
                <NavbarBrand id="title" href="">The Bag Of Holding</NavbarBrand>
                <Nav >
                   <Nav.Item><Nav.Link id="textLinks" href="/">Home </Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link id="textLinks" href="/account">Account</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link id="textLinks" href="/chat">Chat</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link id="textLinks" href="/chatReg"> REG Chat</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
            <Switch>
                <Route path='/account'  exact component={Account}></Route>
                <Route path='/' exact component={Home}></Route>
                <Route path='/chat' exact component={Chat}></Route>
                <Route path='/chatReg' exact component={RegisterChat}></Route>
            </Switch>
        </Router> 
            
        </div>
    )
}


export default LoggedIn;