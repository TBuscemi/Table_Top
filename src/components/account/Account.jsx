import React from 'react';
import "./Account.css"



class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            current_user : {}
        }
    }

    render() {
        return (
            <div className="">
                {/* <h3>User Info:</h3>
                <h5>First Name:  {this.props.current_user.first_name}</h5>
                <h5>Last Name:  {this.props.current_user.last_name}</h5>
                <h5>Username:  {this.props.current_user.username}</h5>
                <h5>email:  {this.props.current_user.email}</h5> */}
            </div>
        )
    }
}

export default Account;
