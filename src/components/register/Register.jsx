import axios from 'axios';
import React, { Component } from 'react';
import "./Register.css";
import Button from 'react-bootstrap/button';



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let new_user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        
        console.log(new_user)
        
        axios.post('http://127.0.0.1:8000/api/auth/register/', new_user)
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
        // // window.location = "/login"
    }

    handleChange(event){
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="register">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h3>Create New User:</h3>
                    <label for="username">Username: </label>
                    <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br></br>
                    
                    <label for="password">Password: </label>
                    <input type="text" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br></br>

                    <label for="email">Email: </label>
                    <input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/><br></br>

                    <label for="first_name">First Name: </label>
                    <input type="text" name="first_name" onChange={(event) => this.handleChange(event)} value={this.state.first_name}/><br></br>

                    <label for="last_name">Last Name: </label>
                    <input type="text" name="last_name" onChange={(event) => this.handleChange(event)} value={this.state.last_name}/><br></br>

                    <Button type="submit">Register!</Button>
                </form>
            </div>
        )
    }
}

export default Register;
