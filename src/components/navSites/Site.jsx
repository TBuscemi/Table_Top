import { Component } from 'react';
import NotLoggedIn from './sites/NotLoggedIn';
import LoggedIn from './sites/LoggedIn';


class Site extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            role:''
  
        }
    }

    renderSite(props){
        if(this.props.user.user_id === undefined){
            console.log('notLoggedIn!');
            console.log("test1 "+this.props.user.user_id);
            console.log(props.user)
           ;
            ;
        
            return (
                <div id='nlDiv'>
                    <NotLoggedIn user={this.props.user.user_id} role={this.role} />
                </div>
            );
        }
        else{
            console.log('LoggedIn');
            console.log(+this.props.user.user_id);
            return (
                <div>
                    <LoggedIn user={this.state.user} role={this.role}/>
                </div>
            );
        }
    }
    
    render(){
        return (
            <div>
                {this.renderSite(this.props)}
            </div>
        );
    }
}

export default Site;