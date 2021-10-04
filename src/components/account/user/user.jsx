import React from 'react'
import axios from 'axios';
import { Component } from 'react';
import './user.css'


class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            accountData:[],
            username:"",
            password:"",
            email:"",
            first_name:"",
            last_name:"",

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        console.log(this.state)
        this.getUser(this.props.accountData)
    }
    
    
    
    async getUser(){
        let response = await axios.get('http://127.0.0.1:8000/api/auth/userinfo/'+this.props.user+'/')
        this.setState ({accountData : response.data})
    }

    
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            username:event.target.elements.username.value,
            password:event.target.elements.password.value,
            email:event.target.elements.email.value,
            first_name:event.target.elements.first_name.value,
            last_name:event.target.elements.last_name.value,

        })
        console.log(this.state.password)
        let accountData ={
            username:event.target.elements.username.value,
            password:event.target.elements.password.value,
            email:event.target.elements.email.value,
            first_name:event.target.elements.first_name.value,
            last_name:event.target.elements.last_name.value,
            
        }
        console.log(accountData)
        this.setUser(accountData)
    }


    async setUser(accountData){
        let request =  await axios.get('http://127.0.0.1:8000/api/auth/userinfo/'+this.props.user+'/')
        let user = request.data
        
        let updateUser = {
            username:accountData.username,
            password:accountData.password,
            email:accountData.email,
            first_name:accountData.first_name,
            last_name:accountData.last_name,
           

        }
        console.log(updateUser)
        axios.put('http://127.0.0.1:8000/api/auth/userinfo/'+this.props.user+'/', updateUser)
        window.location.reload(false);
    }
    

    render(){
        return (
            <div className="">
                <div>
                        <h1 class="textCenter">User info!!</h1>
                        <form onSubmit={this.handleSubmit}>
                            <table>
                            <tbody>
                            <tr>
                                <td><label class="text fs-2" for= "username">username:</label></td>
                                <td><input class="inputField form-control-lg" type="text" name="username" defaultValue={this.state.accountData.username}/></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for= "password">password:</label></td>
                                <td><input class="inputField form-control-lg" type="text" name="password" defaultValue={this.state.accountData.password}/></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2"  for= "email">email :</label></td>
                                <td><input class="inputField form-control-lg" type="text" name="email" defaultValue={this.state.accountData.email}/></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for= "first_name">first name</label></td>
                                <td><input class="inputField form-control-lg"  type="text" name="first_name" defaultValue={this.state.accountData.first_name}/></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for= "last_name">last name</label></td>
                                <td><input class="inputField form-control-lg"  type="text" name="last_name"defaultValue={this.state.accountData.last_name}/></td>
                            </tr>
                            <button class="m-3 btn" type="submit"><span class="whiteText px-2 py-2 fs-3">Update User!</span></button>
                            </tbody>
                            </table>
                        </form>
                </div> 
            </div>
        )
    }

}

export default User;