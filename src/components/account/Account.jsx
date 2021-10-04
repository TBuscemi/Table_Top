import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import "./Account.css"
import AccountInfo from './accountInfo/AccountInfo';
import Footer from "../footer/Footer";
import User from './user/user';







class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountData:[],
            user_id:"",
            discord:"",
            campaign_length:"",
            platform_played_on:"",
            systems_looking_for:"",
            gm:"",
            player:"",
            looking_for_game:"",
            party_leaders:""

    
          }     
    }
 

    componentDidMount(){
        this.getUserById() 
        console.log(this.props.user)

    }
   
    
    async getUserById(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/account/user/'+ this.props.user+'/')
            this.setState ({accountData : response.data})
            }
            
        catch(ex){
            console.log("made a account")
            this.setState({
                user_id:this.props.user
            })
            let newUser = {
                user: this.props.user,
                discord:"Discord#0000",
                campaign_length:"Short",
                platform_played_on:"Roll20",
                game_systems_looking_for:"D&D",
                gm:"no",
                player:"Yes",
                looking_for_game:"Yes",
                chat_name:"Enter Chat Name",
                party_leaders:"no"
            }
            console.log(newUser)
            let request = axios.post('http://127.0.0.1:8000/api/account/user/', newUser)
        
        }  
    }

    render() {    
        return (
            <div>
                <AccountInfo accountData = {this.state.accountData} user={this.props.user}/>
                <User user={this.props.user}/>
                <div>
                   <Footer/>
                </div>
            </div>
        )
    }
}

export default Account;
