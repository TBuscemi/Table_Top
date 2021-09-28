import React,{Component} from 'react';
import "./AccountInfo.css"



class AccountInfo extends Component {
        constructor(props) {
            super(props); 
            
        }
            componentDidMount(){   
                console.log(this.props.accountData)    
                console.log(this.props.user)
            }
        
        render(){
                return (
                <div className="">
                        
                        <table>
                                <thead>
                                        <tr>
                                                <th>Username</th>
                                                <th>Discord</th>
                                                <th>How Long Of A campaign_length</th>
                                                <th>What Platform Do you Play On</th>
                                                <th>Short Description</th>
                                                <th>Are You A GM</th>
                                                <th>Are You A Player</th>
                                        </tr>
                                </thead>
                                <tbody>
                                
                                        <tr>
                                                <td>{this.props.accountData.username}</td>
                                                <td>{this.props.accountData.Discord}</td>
                                                <td>{this.props.accountData.campaign_length}</td>
                                                <td>{this.props.accountData.platform_played_on}</td>
                                                <td>{this.props.accountData.game_systems_looking_for}</td>
                                                <td>{this.props.accountData.description}</td>
                                                <td>{this.props.accountData.gm}</td>
                                                <td>{this.props.accountData.player}</td>
                                        </tr>
                                </tbody>
                        </table> 
                </div>
                )
        }
    
}

export default AccountInfo;