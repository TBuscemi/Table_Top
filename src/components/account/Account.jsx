import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import "./Account.css"
import AccountInfo from './accountInfo/AccountInfo';






class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountData:[]
    
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
            console.log(this.state.accountData)
            
              
            }
            
        catch(ex){
             console.log("error in api call");
        }  
    }

    render() {
        

           
        return (
            <div>
                <AccountInfo accountData = {this.state.accountData} user={this.props.user}/>
            </div>
        )
    }
}

export default Account;
