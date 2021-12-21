import "./style/LoggedIn.css"
import { Component } from 'react';
import { Routes, Route,NavLink} from "react-router-dom";
import axios from 'axios';
import Home from '../../home/Home';
import Account from '../../account/Account';
import '../Site';
import Tutorials from '../../tutorials/Tutorials';
import TutorialsPartyLeader from '../../tutorials/tutorialsPartyLeader/tutorialsPartyLeader';



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
                <NavLink to="/" className="text-links">Home </NavLink>
                <NavLink to="/account" className="text-links">Account</NavLink>
                <NavLink to="/tutorials" className="text-links">Tutorials</NavLink>
                <NavLink  onClick={this.logout}>Logout</NavLink>
     
                <Routes>
                    <Route path='/account'  render={props => <Account {...props} user={this.props.userId}/>} />
                    <Route path='/' element={Home}/>
                    <Route render={props => {
                        if(this.state.accountData.party_leaders === "no"){
                            return <Route path='/tutorials' element= {Tutorials}/>
                        }
                        else{
                            console.log("party")
                            return <Route path='/tutorials' render={props => <TutorialsPartyLeader {...props} accountData={this.state.accountData}/> }/>
                        }
                    }}/>
                </Routes>           
            </div>
        )
    }
}


export default LoggedIn;

