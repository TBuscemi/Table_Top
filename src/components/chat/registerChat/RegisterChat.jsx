import "./RegisterChat.css"
import axios from "axios";
import { Button, Form, } from 'react-bootstrap'
import React,{setError} from "react";
import { render } from "@testing-library/react";
import { ChatEngine,Ch} from 'react-chat-engine'


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
           
            let authHeader = {'Private-Key': '4a0c3434-a015-4db4-ab18-d26d16739e76'}
            
            let newUser = {
                userName: this.state.userName,
                secret: this.state.secret,
            }
           
            try{
            axios.post('https://api.chatengine.io/users/',newUser,{
            Headers:{'PRIVATE-KEY': '4a0c3434-a015-4db4-ab18-d26d16739e76'}})
            }catch (error) {
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
            <div>       
                <div class='col-md-3'></div>
                <div class='col-md-6'>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                
                <label for="username">Username: </label>
                    <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br></br>
                    
                <label for="secret">Password: </label>
                    <input type="text" name="secret" onChange={(event) => this.handleChange(event)} value={this.state.secret}/><br></br>

                    <Button type='submit'>
                    Create Account
                    </Button>
                </Form>
                </div>
                <div class='col-md-3'></div>
            </div>
        ); 
    }   
}

export default RegisterChat
