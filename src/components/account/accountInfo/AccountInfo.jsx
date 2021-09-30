import axios from 'axios';
import React,{Component} from 'react';
import "./AccountInfo.css"
import { Card } from 'react-bootstrap';



class AccountInfo extends Component {
    constructor(props) {
        super(props); 
        this.state ={
            discord:this.props.discord,
            campaign_length:"",
            platform_played_on:"",
            systems_looking_for:"",
            description:"",
            gm:"",
            player:"",
            looking_for_game:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
 
    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.elements.discord.value)
        this.setState({

            discord:event.target.elements.discord.value
        })
        let accountData = event.target.elements.discord.value
        
        console.log(accountData)
            
        this.setUser(accountData) 
        

    }

    async setUser(accountData){
      
        let request =   await axios.get('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/')
        
        let user = request.data
        let updateUser = {
            discord:accountData,
            platform_played_on:user.platform_played_on,
            game_systems_looking_for:user.game_systems_looking_for,
            campaign_length:user.campaign_length,
            description:user.description,
            player:user.player,
            gm:user.gm,
            looking_for_game:user.looking_for_game,
        }
        
        
        updateUser.discord = accountData
        axios.put ('http://127.0.0.1:8000/api/account/user/'+this.props.user+'/', updateUser)

    }
    
    
    handleChange(event){    
        event.persist()
        
        this.setState({
        [event.target.name]: event.target.defaultValue
        })
    }

    componentDidMount(){   
        console.log(this.props.accountData.discord)
        console.log(this.props.user)
        console.log(this.state)
    }

    
  
    
    render(){
        return (
            <div className="">
                
                {/* <table>
                    <thead>
                        <tr>
                             <th>Discord</th>
                             <th>How Long Of A campaign_length</th>
                             <th>What Platform Do you Play On</th>
                             <th>What Game System Do You Wanna Play On</th>
                             <th>Short Description</th>
                             <th>Are You A GM</th>
                             <th>Are You A Player</th>
                             <th>Looking For A Game</th>
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
                             <td>{this.props.accountData.looking_for_game}</td>
                        </tr>
                     </tbody>
                </table> */}
                <div>
                        <h1>Your Account!</h1>

                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for= "discord">Discord:</label>
                            <input type="text" name="discord" defaultValue={this.props.accountData.discord} />
            
                        </div>
                        <div>
                             <label for= "campaign_length">How Long Of A campaign Do You W:</label>
                             <select defaultValue={this.props.accountData.campaign_length} >
                             <option value = "One Shot">One Shot</option> 
                             <option value = "Short Campaign">Short Campaign</option> 
                             <option value = "Short Campaign">long Campaign</option> 
                             </select>
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
                        <div>
                            <label for= "looking_for_game">Looking For A Game</label>
                            <input type="text" name="looking_for_game"defaultValue={this.props.accountData.looking_for_game} />  
                        </div>
                            <button type="submit">Update</button>
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