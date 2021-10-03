import  './Home.css'
import React from 'react';
import axios from 'axios';
import Footer from "../footer/Footer";
import Button from 'react-bootstrap/button';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            people:[],
            campaign_length:"",
            platform_played_on:"",
            game_systems_looking_for:"",
            gm:"",
            player:"",
            looking_for_game:"",
            chat_name:""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(event){
        event.preventDefault()
        // console.log(event.target.elements.campaign_length.value)
        // this.setState({
        //     campaign_length:event.target.elements.campaign_length,
        //     platform_played_on:event.target.elements.platform_played_on,
        //     game_systems_looking_for:event.target.elements.game_systems_looking_for,
        //     gm:event.target.elements.gm,
        //     player:event.target.elements.player,
        //     looking_for_game:event.target.elements.looking_for_game,
        // })
        
        let accountData ={
            campaign_length:event.target.elements.campaign_length.value,
            platform_played_on:event.target.elements.platform_played_on.value,
            game_systems_looking_for:event.target.elements.game_systems_looking_for.value,
            gm:event.target.elements.gm.value,
            player:event.target.elements.player.value,
            looking_for_game:event.target.elements.looking_for_game.value,
            chat_name:this.state.people.chat_name

        }
        console.log(accountData)
        this.getFriends(accountData)
   
    }

    
    async getFriends(searchFriends){
        let response = await axios.post('http://127.0.0.1:8000/api/account/search/', searchFriends)
        this.setState ({people : response.data})
        console.log(this.state.people)


    }
    

    render(){
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                <div>
                    <h1 class="textCenter">Looking For Fellow Adventurers?!</h1>
                </div>
                    
                    <div class="platform row">
                <div class="col-4"> </div>
                <div class = "col-2 right"> 
                    <label for="">What Platform Do You Wanna Use:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="platform_played_on" name="platform_played_on">
                    <option value="Roll20">Roll20</option>
                    <option value="Fantasy Grounds">Fantasy Grounds</option>
                    </select>
                <div class="col-4"> </div>   
                </div>
                </div>

            
                <div class="system row">
                <div class="col-4"> </div>
                <div class = "col-2 right">  
                    <label  for="">How Should The Adventure Be Told:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="game_systems_looking_for" name="game_systems_looking_for">
                    <option value="Dungeon and Dragons">Dungeon and Dragons</option>
                    <option value="Pathfinder">Pathfinder</option>
                    </select> 
                <div class="col-4"> </div>
                </div>
                </div >
                
                <div class="length row">
                <div class = "col-4">  </div>   
                <div class = "col-2 right">  
                    <label for="">How Long Will You Adventure For:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="campaign_length" name="campaign_length" >
                    <option value="One Shot">One Shot</option>
                    <option value="Short campaign">Short campaign </option>
                    <option value="long campaign">long campaign </option>
                    </select>      
                <div class="col-4"> </div>
                </div>   
                </div>
                
                <div class="player row">
                <div class = "col-4"> </div>    
                <div class = "col-2 right">
                    <label for="">Are You A Player:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="player" name="player" >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>       
                <div class="col-4"> </div>
                </div>   
                </div>
               
                <div class="gm row">
                <div class = "col-4"> </div>    
                <div class = "col-2 right">
                    <label for="">Are You A GM:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="gm" name="gm" >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>       
                <div class="col-4"> </div>
                </div>   
                </div>
            
                <div class="looking_for_game row">
                <div class = "col-4">  </div>      
                <div class = "col-2 right">
                    <label for="">Looking For A Game:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="looking_for_game" name="looking_for_game">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                <div class="col-4"> </div> 
                </div>
                <table>
                    <thead>
                        <tr>
                             <th>Chat Name</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                        <tr>
                             { <td>{this.state.people.game_systems_looking_for}</td> } <br />
                        </tr>
                     </tbody>
                </table>
                </div>
                <Button type="submit">Search</Button>
                </form>
                <div>
                   <Footer/>
                </div>
               
            </div>
        )
    }
}



export default Home;