import axios from 'axios';
import React from 'react';
import "./Register.css";
import Button from 'react-bootstrap/button';
import Footer from "../footer/Footer";



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
        
        let request = axios.post('http://127.0.0.1:8000/api/auth/register/', new_user)
        localStorage.removeItem('token')
        console.log(localStorage.getItem('token'))
        
        
        window.location = "/login" 
    }

    handleChange(event) {
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="register">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <br/>
                    <br/>
                    <h1 class="textCenter">Create New User:</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><label class="text fs-2" for="username">Username: </label></td>
                                <td><input class="inputField form-control-lg" type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br></br></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for="password">Password: </label></td>
                                <td><input class="inputField form-control-lg" type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br></br></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for="email">Email: </label></td>
                                <td><input class="inputField form-control-lg" type="email" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/><br></br></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for="first_name">First Name: </label></td>
                                <td><input class="inputField form-control-lg" type="text" name="first_name" onChange={(event) => this.handleChange(event)} value={this.state.first_name}/><br></br></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for="last_name">Last Name: </label></td>
                                <td><input class="inputField form-control-lg" type="text" name="last_name" onChange={(event) => this.handleChange(event)} value={this.state.last_name}/><br></br></td>
                            </tr>
                        </tbody>
                    </table>
                    <Button class="m-3 btn" type="submit"><span class="whiteText px-2 py-2 fs-3">Register!</span></Button>
                </form>
                <div>
                   <Footer/>
                </div>
            </div>
        )
    }
}

export default Register;