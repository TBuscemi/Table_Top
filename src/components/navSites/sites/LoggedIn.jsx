import { Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import axios from 'axios';
import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}
from "react-router-dom";
import Home from '../../home/Home';
import Account from '../../account/Account';
import './LoggedIn.css'
import Chat from '../../chat/Chat';
import RegisterChat from '../../chat/registerChat/RegisterChat';
import '../Site';
import Tutorials from '../../tutorials/Tutorials';
import TutorialsPartyLeader from '../../tutorials/tutorialsPartyLeader/tutorialsPartyLeader';
import './LoggedIn.css'


class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountData :[]
        }
    }
    
    componentDidMount() {
      
        this.getUserById()
      }

    async getUserById(){
        let response = await axios.get('http://127.0.0.1:8000/api/account/user/'+ this.props.userId+'/')
        this.setState ({accountData : response.data})
    }
    logout =()=>{
        localStorage.removeItem('token');
        this.setState({
            user:[],
            userId:[],
        });
        window.location="/";
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
                    <Nav.Item><Nav.Link id="textLinks" href="/chatReg"> Register For Chat</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link  id="textLinks" href="/tutorials">Tutorials</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link id ="textLinks" onClick={this.logout} >Logout</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <Switch>
                <Route path='/account'  render={props => <Account {...props} user={this.props.userId}/>} />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/chat' exact component={Chat}></Route>
                    <Route path='/chatReg' exact component={RegisterChat}></Route> 
                    <Route render={props => {
                        if(this.state.accountData.party_leaders === "no"){
                            return <Route path='/tutorials' exact component = {Tutorials}/>
                        }
                        else{
                            console.log("party")
                            return <Route path='/tutorials' render={props => <TutorialsPartyLeader {...props} accountData={this.state.accountData}/> }/>
                        }
                    }}/>
                </Switch>
            </Router> 
                
            </div>
        )
    }
}


export default LoggedIn;

