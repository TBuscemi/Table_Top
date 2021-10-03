import Select from 'react-select'
import axios from 'axios';
import React,{Component} from 'react';
import "./AccountInfo.css"
import User from '../user/user';



class AccountInfo extends Component {
    constructor(props) {
        super(props); 
        this.state ={
            discord:this.props.discord,
            campaign_length:this.props.campaign_length,
            platform_played_on:this.props.platform_played_on,
            game_systems_looking_for:this.props.game_systems_looking_for,
            gm:this.props.gm,
            player:this.props.player,
            chat_name:this.props.chat_name,
            looking_for_game:this.props.looking_for_game,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
 
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            discord:event.target.elements.discord.value,
            campaign_length:event.target.elements.campaign_length.value,
            platform_played_on:event.target.elements.platform_played_on.value,
            game_systems_looking_for:event.target.elements.game_systems_looking_for.value,
            gm:event.target.elements.gm.value,
            player:event.target.elements.player.value,
            looking_for_game:event.target.elements.looking_for_game.value,
            chat_name:event.target.elements.chat_name.value,

     
        })
        let accountData ={
            discord:event.target.elements.discord.value,
            campaign_length:event.target.elements.campaign_length.value,
            platform_played_on:event.target.elements.platform_played_on.value,
            game_systems_looking_for:event.target.elements.game_systems_looking_for.value,
            gm:event.target.elements.gm.value,
            player:event.target.elements.player.value,
            looking_for_game:event.target.elements.looking_for_game.value,
            chat_name:event.target.elements.chat_name.value,

        } 
        this.setUser(accountData) 
    }

    async setUser(accountData){
        let request =  await axios.get('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/')
        
        let user = request.data
        let updateUser = {
            discord:accountData.discord,
            platform_played_on:accountData.platform_played_on,
            game_systems_looking_for:accountData.game_systems_looking_for,
            campaign_length:accountData.campaign_length,
            player:accountData.player,
            gm:accountData.gm,
            looking_for_game:accountData.looking_for_game,
            chat_name:accountData.chat_name,
        }

        axios.put ('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/', updateUser)

    }
    
    
    render(){
        return (
            <div className="">
                <div>
                        <h1>Your Account!</h1>
                        <div>   
                        </div>
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for= "discord">Discord:</label> 
                            <input type="text" name="discord" defaultValue={this.props.accountData.discord} />
            
                        </div>
                        <div>
                            <label for= "chat_name">Chat Name:</label> 
                            <input type="text" name="chat_name" defaultValue={this.props.accountData.chat_name} />
                        </div>
                        <div>
                            <label for= "campaign_length">Campaign Length:</label>
                            <h3>One Shot/Short Campaign/Long Campaign</h3>
                            <input type="text" name="campaign_length" defaultValue={this.props.accountData.campaign_length} />
                        </div>
                        <div>
                             <label for= "platform_played_on">What Platform Do you Play On</label>
                             <h3>Roll20/Fantasy Grounds</h3>
                             <input type="text" name="platform_played_on" defaultValue={this.props.accountData.platform_played_on} />  
                        </div>
                        <div>
                             <label for= "game_systems_looking_for">What Game System Are You Looking For</label>
                             <h3>Dungeon and Dragons/Pathfinder</h3>
                             <input type="text" name="game_systems_looking_for"defaultValue={this.props.accountData.game_systems_looking_for} />  
                        </div>
                        <div>
                             <label for= "gm">Are You A Game Master</label>
                             <h3>Yes/No</h3>
                             <input type="text" name="gm"defaultValue={this.props.accountData.gm} />  
                        </div>
                        <div>
                            <label for= "player">Are You A Player</label>
                            <h3>Yes/No</h3>
                            <input type="text" name="player"defaultValue={this.props.accountData.player} />  
                        </div>
                        <div>
                            <label for= "looking_for_game">Looking For A Game</label>
                            <h3>Yes/No</h3>
                            <input type="text" name="looking_for_game"defaultValue={this.props.accountData.looking_for_game} />  
                        </div>
                           <br /> <button type="submit">Update</button>
                        </form>
                </div> 
            </div>
        )
    }

}

export default AccountInfo;