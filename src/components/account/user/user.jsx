import React from 'react'
import axios from 'axios';
import { Component } from 'react';


class User extends Component {
    constructor(props) {
        super(props);
        this.this={
            userData:[],
            username:"",
            email:"",
            first_name:"",
            last_name:"",

        }
    }
    
    componentDidCatch(){
        console.log(this.props.user_id)
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            username:event.target.elements.username.value,
            email:event.target.elements.email.value,
            first_name:event.target.elements.first_name.value,
            last_name:event.target.elements.last_name.value,
        })
        let userData ={
            username:event.target.elements.username.value,
            email:event.target.elements.email.value,
            first_name:event.target.elements.first_name.value,
            last_name:event.target.elements.last_name.value,
        }

    }



    render(){
        return (
            <div className="">
                <div>
                        <h1>User info!!</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for= "username">username:</label> <br />
                            <input type="text" name="username" value/>
            
                        </div>
                        <div>
                            <label for= "email">email :</label>
                            <input type="text" name="email" defaultValue />
                        </div>
                        <div>
                            <label for= "first_name">first_name</label>
                            <input type="text" name="first_name" defaultValue />  
                        </div>
                        <div>
                            <label for= "last_name">last_name</label>
                            <input type="text" name="last_name"defaultValue />  
                        </div>
                        <br /> <button type="submit">Update User!</button>
                    </form>
                </div> 
            </div>
        )
    }

}

export default User;