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
    }

        handleSubmit(event) {
            event.preventDefault();
            console.log(this.state.secret)
           
            // let authHeader = {'Private-Key': '4a0c3434-a015-4db4-ab18-d26d16739e76'}
            
            let newUser = {
                userName: this.state.userName,
                secret: this.state.secret,
            }
           
            try{
            axios.post('https://api.chatengine.io/users/',newUser,{
            Headers:{'PRIVATE-KEY': '4a0c3434-a015-4db4-ab18-d26d16739e76'}})   
            }
            catch (error) {
            console.log(error);
            setError(`oops, something went wrong`)
            }

         
            
        }
        
        handleChange(event){
            event.persist();
    
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
    render() {
        return(
            <div align="center" class="pt-5 mt-5">     
            <h1 class="textCenter">Register For Chat Below</h1> 
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                
                <label class="text fs-2" for="username" for="username">Username: </label>
                    <input class="inputField form-control-lg" type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.userName}/><br></br>
                    
                <label class="text fs-2" for="secret">Password: </label>
                    <input class="inputField form-control-lg" type="text" name="secret" onChange={(event) => this.handleChange(event)} value={this.state.secret}/><br></br>

                    <Button class="m-3 btn"type="submit"><span class="whiteText px-2 py-2 fs-3">
                    Create Account
                    </span></Button>
                </Form>
                <div>
                    <img class="img-fluid" id="redDice" src={redDice} alt='set of gaming dice in red hues' />
                </div>
            </div>
        ); 
    }   
}
export default RegisterChat
