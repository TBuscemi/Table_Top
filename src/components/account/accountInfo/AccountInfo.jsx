import axios from 'axios';
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

    handleSubmit(event) {
        event.preventDefault();
        this.props.accountData = {
        discord: this.props.accountData.discord,
        campaign_length: this.props.accountData.campaign_length,
        platform_played_on: this.props.accountData.platform_played_on,
        systems_looking_for: this.props.accountData.game_systems_looking_for,
        description: this.props.accountData.description,
        gm: this.props.accountData.gm,
        player: this.props.accountData.player
        }
        axios.put ('http://127.0.0.1:8000/api/accountuser/'+this.props.user+'/')
    }
    
    handleChange(event){    
        this.setState({
        [event.target.name]: event.target.value
        })
    }
    
    render(){
        return (
            <div className="">
                
                <table>
                    <thead>
                        <tr>
                             <th>Discord</th>
                             <th>How Long Of A campaign_length</th>
                             <th>What Platform Do you Play On</th>
                             <th>What Game System Do You Wanna Play On</th>
                             <th>Short Description</th>
                             <th>Are You A GM</th>
                             <th>Are You A Player</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        <tr>
                             <td>{this.props.accountData.discord}</td>
                             <td>{this.props.accountData.campaign_length}</td>
                             <td>{this.props.accountData.platform_played_on}</td>
                             <td>{this.props.accountData.game_systems_looking_for}</td>
                             <td>{this.props.accountData.description}</td>
                             <td>{this.props.accountData.gm}</td>
                             <td>{this.props.accountData.player}</td>
                        </tr>
                     </tbody>
                </table>
                <div>
                        <h1>Your Account!</h1>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div>
                            <label for= "discord">Discord:</label>
                            <input type="text" name="discord" defaultValue={this.props.accountData.discord} />
                        </div>
                        <div>
                             <label for= "campaign_length">How Long Of A campaign_length:</label>
                             <input type="text" name="campaign_length" defaultValue={this.props.accountData.campaign_length} />
                        </div>
                        <div>
                             <label for= "platform_played_on">What Platform Do you Play On</label>
                             <input type="text" name="platform_played_on" defaultValue={this.props.accountData.platform_played_on} />  
                        </div>
                        <div>
                             <label for= "game_systems_looking_for">What Game System Are You Looking For</label>
                             <input type="text" name="game_systems_looking_for"defaultValue={this.props.accountData.game_systems_looking_for} />  
                        </div>
                        <div>
                             <label for= "description"> Short Description</label>
                             <input type="text" name="description" defaultValue={this.props.accountData.description} />  
                        </div>
                        <div>
                             <label for= "gm">Are You A Game Master</label>
                             <input type="text" name="gm"defaultValue={this.props.accountData.gm} />  
                        </div>
                        <div>
                            <label for= "player">Are You A Player</label>
                            <input type="text" name="player"defaultValue={this.props.accountData.player} />  
                        </div>
                        <button type="submit">Update!</button>
                        </form>
                </div> 
            </div>
        )
    }

}

export default AccountInfo;