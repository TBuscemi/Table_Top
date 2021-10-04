import React from 'react';
import axios from 'axios';
import "./Login.css"
import Footer from "../footer/Footer";
import greenDice from './greenDice.png';




class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: ''
        
      }   
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const user_data = {
            username: this.state.username,
            password: this.state.password
        };
        this.loginFunction(user_data)
        
    }

    async loginFunction(user_data) {
        
        try{
          let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user_data)
            localStorage.setItem('token', response.data.access)
            console.log(response.data.access)
            console.log(this.state.username)
            console.log(this.state.password)
            console.log(localStorage.getItem('token'))
            localStorage.getItem('token');
            window.location = '/';
        }
            catch (error){
            console.log(error)

        }
      
    }

    render() {
        return (
            <div align="center" class="pt-5 mt-5">
                <h1 class="textCenter">Login Below</h1> 
                <form onSubmit={this.handleSubmit}>
                    <label class="text fs-2" for="username">Username:</label>
                    <input class="inputField form-control-lg" type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br>
                    
                    <label class="text fs-2" for="password">Password:</label>
                    <input class="inputField form-control-lg" type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br>

                    <button class="m-3 btn pt-2" type="submit"><span class="whiteText px-2 py-2 fs-3">Login</span></button>
                </form>
                <div>
                    <img class="img-fluid" id="greenDice" src={greenDice} alt='set of gaming dice in green hues' />
                </div>
                <div>
                   <Footer/>
                </div>
            </div>
        )
    }
}
export default Login;
