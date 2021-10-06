import "./RegisterChat.css"
import axios from "axios";
import { Button, Form, } from 'react-bootstrap'
import React,{setError} from "react";
import redDice from './redDice.png';



class RegisterChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            secret:''
        }
        this.registerUser=this.registerUser.bind(this)
    }

        registerUser() {
            let newUser = {
                username: this.state.userName,
                secret: this.state.secret,
            }  
            this.chatRegister(newUser)
        }

        async chatRegister(newUser){
            // try{
            //     console.log(newUser)
            //     await axios.post('https://api.chatengine.io/users/',this.state.newUser,{
            //     headers:{'PRIVATE_KEY':'4a0c3434-a015-4db4-ab18-d26d16739e76'},})   
            // }
            // catch (error) {
            //     console.log(error);
            // }   

            var data = {
                "username": newUser.username,
                "secret": newUser.secret
            };
        
            var config = {
                method: 'post',
                url: 'https://api.chatengine.io/users/',
                headers: {
                    'PRIVATE-KEY': '4a0c3434-a015-4db4-ab18-d26d16739e76'
                },
                data : data
            };
        
            axios(config)
            window.location ="/chat"
        }
        
        
        
        




    render() {
        return(
            <div align="center" class="pt-5 mt-5">     
            <h1 class="textCenter">Register For Chat Below</h1> 
                
                <label class="text fs-2" for="username" for="username">Username: </label>
                    <input class="inputField form-control-lg" type="text" name="username" onChange={(event) => this.setState({userName:event.target.value})} value={this.state.userName}/><br></br>
                    
                <label class="text fs-2" for="secret">Password: </label>
                    <input class="inputField form-control-lg" type="text" name="secret" onChange={(event) => this.setState({secret:event.target.value})} value={this.state.secret}/><br></br>

                    <Button class="m-3 btn" type="submit" onClick={this.registerUser}><span class="whiteText px-2 py-2 fs-3" >
                    Create Account
                    </span></Button>
            
                <div>
                    <img class="img-fluid" id="redDice" src={redDice} alt='set of gaming dice in red hues' />
                </div>
            </div>
        ); 
    }   
}
export default RegisterChat
