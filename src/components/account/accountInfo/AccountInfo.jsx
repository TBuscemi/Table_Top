import Select from 'react-select'
import axios from 'axios';
import React,{Component} from 'react';
import "./AccountInfo.css"
import { Card } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';


const campL= [
    {index:0, value: 'One Shot', label: 'One Shot' },
    {index:1, value: 'Short Campaign', label: 'Short Campaign' },
    {index:2, value: 'Long Campaign', label: 'Long Campaign' },
  ];

const animatedComponents = makeAnimated();

class AccountInfo extends Component {
    constructor(props) {
        super(props); 
        this.state ={
            discord:this.props.discord,
            campaign_length:this.props.campaign_length,
            platform_played_on:this.props.platform_played_on,
            game_systems_looking_for:this.props.game_systems_looking_for,
            description:this.props.description,
            gm:this.props.gm,
            player:this.props.player,
            looking_for_game:this.props.looking_for_game
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
 
    handleSubmit(event){
        console.log(this.state)
        event.preventDefault();
        console.log(event.target.elements.campaign_length.value)
        this.setState({
            discord:event.target.elements.discord.value,
            campaign_length:event.target.elements.campaign_length.value,
            platform_played_on:event.target.elements.platform_played_on.value,
            game_systems_looking_for:event.target.elements.game_systems_looking_for.value,
            description:event.target.elements.description.value,
            gm:event.target.elements.gm.value,
            player:event.target.elements.player.value,
            looking_for_game:event.target.elements.looking_for_game.value,
     
        })
        let accountData ={
            discord:event.target.elements.discord.value,
            campaign_length:event.target.elements.campaign_length.value,
            platform_played_on:event.target.elements.platform_played_on.value,
            game_systems_looking_for:event.target.elements.game_systems_looking_for.value,
            description:event.target.elements.description.value,
            gm:event.target.elements.gm.value,
            player:event.target.elements.player.value,
            looking_for_game:event.target.elements.looking_for_game.value,

        } 
        
        
        console.log(this.props) 
        this.setUser(accountData) 
    }

    async setUser(accountData){
        let request =   await axios.get('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/')
        
        let user = request.data
        let updateUser = {
            discord:accountData.discord,
            platform_played_on:accountData.platform_played_on,
            game_systems_looking_for:accountData.game_systems_looking_for,
            campaign_length:accountData.campaign_length,
            description:accountData.description,
            player:accountData.player,
            gm:accountData.gm,
            looking_for_game:accountData.looking_for_game,
        }
        
        
        
        axios.put ('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/', updateUser)

    }
    
    
    componentDidMount(){   
        console.log(this.props.updateUser)
        console.log(this.props.user_id)
        
    }

    
  
    
    render(){
        return (
            <div className="">
                <div>
                        <h1>Your Account!</h1>

                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for= "discord">Discord:</label> <br />
                            <input type="text" name="discord" value={this.props.accountData.discord} />
            
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
                             <h3>D&D/Pathfinder</h3>
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
                {/* <div><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card></div> */}
            </div>
        )
    }

}

export default AccountInfo;