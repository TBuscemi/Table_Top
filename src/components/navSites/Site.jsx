import { Component } from 'react';
import NotLoggedIn from './sites/NotLoggedIn';
import LoggedIn from './sites/LoggedIn';



class Site extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            userId:[]
  
        }
    }
 


    renderSite(props){
        if(this.props.user.user_id === undefined){
            console.log('notLoggedIn!')
            return (
                <div id='nlDiv'>
                    <NotLoggedIn userId={this.state.userId} user={this.state.user} />
                </div>
            );
        }
        else{
            console.log('LoggedIn');
            let userId= this.props.user.user_id
            return (
                <div>
                    <LoggedIn userId={userId} />
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