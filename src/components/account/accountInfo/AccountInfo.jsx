import axios from 'axios';
import React,{Component} from 'react';
import "./AccountInfo.css"




class AccountInfo extends Component {
    constructor(props) {
        super(props); 
        this.state ={
            discord:"",
            campaign_length:"",
            platform_played_on:"",
            game_systems_looking_for:"",
            gm:"",
            player:"",
            chat_name:"",
            looking_for_game:"",
            rating: "",
            lvl_of_rp:"",
            user: 0,
        }
    }
    
    componentDidMount(){
        if(this.props.accountData.user != undefined){
        this.setInitialState()}
    }
    componentDidUpdate(){
        if(this.state.user === 0 ){
            this.setInitialState()
        }
    }

    setInitialState(){
        this.setState({
            discord:this.props.accountData.discord,
            campaign_length:this.props.accountData.campaign_length,
            platform_played_on:this.props.accountData.platform_played_on,
            game_systems_looking_for:this.props.accountData.game_systems_looking_for,
            gm:this.props.accountData.gm,
            player:this.props.accountData.player,
            chat_name:this.props.accountData.chat_name,
            looking_for_game:this.props.accountData.looking_for_game,
            rating: this.props.accountData.rating,
            lvl_of_rp: this.props.accountData.lvl_of_rp,
            user:this.props.accountData.user
        })
    }
 
    handleSubmit=(event)=>{
        event.preventDefault();
        let accountData ={
            chat_name: this.state.chat_name,
            discord:this.state.discord,
            campaign_length:this.state.campaign_length,
            platform_played_on:this.state.platform_played_on,
            game_systems_looking_for:this.state.game_systems_looking_for,
            gm:this.state.gm,
            player:this.state.player,
            looking_for_game:this.state.looking_for_game,
            chat_name:this.state.chat_name,
            rating:this.state.rating,
            lvl_of_rp:this.state.lvl_of_rp,
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
            rating:accountData.rating,
            lvl_of_rp:accountData.lvl_of_rp
        }

        axios.put ('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/', updateUser)
        window.location.reload(false);
        this.setState({
            user: 0
        })
    }
    
    handleChange =(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    
    render(){
        return (
            <div className="">
                <div>
                    <h1 class="textCenter">Your Account!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                            <tr>
                                <td><label class="text fs-2" for= "chat_name">Chat Name:</label></td>
                            </tr>
                            <tr>
                                <td><input class="inputField form-control-lg" type="text" name="chat_name" onChange={this.handleChange} value={this.state.chat_name} /></td>
                            </tr>
                            <tr>
                                <td><label class="text fs-2" for= "discord">Discord:</label></td>
                            </tr>
                            <tr>
                                <td><input class="inputField form-control-lg" type="text" name="discord" onChange={this.handleChange} value={this.state.discord} /></td>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2" for= "campaign_length">Campaign Length:</label></td>
                            </tr>
                            <tr>
                                <select name ="campaign_length" onChange={this.handleChange}>
                                    <option defaultValue={this.state.campaign_length}>{this.state.campaign_length}</option>
                                    <option value="Short Campaign">Short Campaign</option>
                                    <option value="Long Campaign">Long Campaign</option>
                                    <option value="One Shot">One Shot</option>
                                </select>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2" for= "platform_played_on">What Platform Do you Play On</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <select name = "platform_played_on" onChange={this.handleChange}>
                                        <option defaultValue={this.state.platform_played_on}>{this.state.platform_played_on}</option>
                                        <option value="Fantasy Grounds">Fantasy Grounds</option>
                                        <option value="Roll20">Roll20</option>
                                        <option value="foundry">Foundry</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2"  for= "game_systems_looking_for">What Game System Are You Looking For</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="game_systems_looking_for" onChange={this.handleChange}>
                                        <option defaultValue={this.state.game_systems_looking_for}>{this.state.game_systems_looking_for}</option>
                                        <option value="D & D">D & D</option>
                                        <option value="Pathfinder">Pathfinder</option>
                                        <option value="Starfinder">Starfinder</option>
                                        <option value="Star Wars">Star Wars</option>
                                        <option value="Wrath and Glory">Wrath and Glory</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2"  for= "gm">Are You A Game Master</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="gm" onChange={this.handleChange}>
                                        <option defaultValue={this.state.gm}>{this.state.gm}</option>
                                        <option value="yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2" for= "player">Are You A Player</label></td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="player" onChange={this.handleChange}>
                                        <option defaultValue={this.state.player}>{this.state.player}</option>
                                        <option value="yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2"  for= "looking_for_game">Looking For A Game</label></td>
                            </tr>
                            <tr>
                                <select name="looking_for_game" onChange={this.handleChange}>
                                    <option defaultValue={this.state.looking_for_game}>{this.state.looking_for_game}</option>
                                    <option value="yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2"  for= "rating">Maturity Level</label></td>
                            </tr>
                            <tr>
                                <select name="rating" onChange={this.handleChange}>
                                    <option defaultValue={this.state.rating}>{this.state.rating}</option>
                                    <option value="E">E</option>
                                    <option value="E10+">E10+</option>
                                    <option value="T">T</option>
                                    <option value="M">M</option>
                                    <option value="A">A</option>
                                </select>
                            </tr>
                            <tr>
                                <td class="pt-3"><label class="text fs-2"  for= "rating">RP vs Combat</label></td>
                            </tr>
                            <tr>
                                <select name="lvl_of_rp" onChange={this.handleChange}>
                                    <option defaultValue={this.state.lvl_of_rp}>{this.state.lvl_of_rp}</option>
                                    <option value="GIMME THE COMBAT">GIMME THE COMBAT</option>
                                    <option value="Balanced">Balanced</option>
                                    <option value="Talk All Day">Talk All Day</option>
                                </select>
                            </tr>

                                
                            <tr>
                                <td class="pt-3"><button class="m-3 btn" type="submit">Update</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div> 
            </div>
        )
    }

}

export default AccountInfo;