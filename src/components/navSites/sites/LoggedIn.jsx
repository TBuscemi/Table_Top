import { Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  }from "react-router-dom";
import Home from '../../home/Home';
import Account from '../../account/Account';
import './LoggedIn.css'
import Chat from '../../chat/Chat';
import RegisterChat from '../../chat/registerChat/RegisterChat';
import '../Site';



class LoggedIn extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log(this.props.userId)
      }

    render(){    
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
                <Route path='/account'  render={props => <Account {...props} user={this.props.userId}/>} />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/chat' exact component={Chat}></Route>
                    <Route path='/chatReg' exact component={RegisterChat}></Route>  
                </Switch>
            </Router> 
                
            </div>
        )
    }
}


export default LoggedIn;