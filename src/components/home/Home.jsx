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
        // window.location.reload(false);


    }
    

    render(){
        return (
            <div class="container-fluid mx-5 my-5 fs-4">
                <div class="col-lg-6 md-10 sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1 class="textCenter">Looking For Fellow Adventurers?!</h1>
                    </div>
                        <div class="platform row">
                            <div class = "col-8 right p-2"> 
                            <p class="text-start fs-4"><label id="platform">What Platform Do You Wanna Use:</label></p>
                            </div>
                            <div class="col-4 left p-2" >
                                <select  class="whiteText p-1 dropdown" id="platform_played_on" name="platform_played_on">
                                    <option value="Roll20">Roll20</option>
                                    <option value="Fantasy Grounds">Fantasy Grounds</option>
                                </select> 
                            </div>
                            </div>
                        <div class="system row">
                            <div class = "col-8 right p-2">  
                            <p class="text-start fs-4"><label id="game_systems_looking_for">How Should The Adventure Be Told:</label></p>
                            </div>
                            <div class="col-4 left p-2" >
                                <select class="whiteText p-1 dropdown" id="game_systems_looking_for" name="platform_played_on" >
                                    <option value="Dungeon and Dragons">Dungeon and Dragons</option>
                                    <option value="Pathfinder">Pathfinder</option>
                                </select>
                            </div>
                        </div>
                        <div class="length row">
                            <div class = "col-8 right p-2">  
                            <p class="text-start fs-4"><label id="length">How Long Will You Adventure For:</label></p>
                            </div>
                            <div class="col-4 left p-2" >
                                <select class="whiteText p-1 dropdown" id="campaign_length" name="campaign_length">
                                    <option value="One Shot">One Shot</option>
                                    <option value="Short campaign">Short Campaign </option>
                                    <option value="long campaign">long Campaign </option>
                                </select>      
                            </div>   
                        </div>
                        <div class="player row">
                            <div class = "col-8 right p-2">
                            <p class="text-start fs-4"><label id="player">Are You A Player:</label></p>
                                </div>
                                <div class="col-4 left p-2" >
                                    <select class="whiteText p-1 dropdown" id="" name="player">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                            </div>   
                        </div>
                        <div class="gm row">   
                            <div class = "col-8 right p-2">
                            <p class="text-start fs-4"><label id="gm">Are You A GM:</label></p>
                            </div>
                            <div class="col-4 left p-2" >
                                <select class="whiteText p-1 dropdown" id="" name="gm">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>       
                            </div>   
                        </div>
                        <div class="looking_for_game row">
                            <div class = "col-8 right p-2">
                                <p class="text-start fs-4"><label id="">Looking For A Game:</label></p>
                            </div>
                            <div class="col-4 left p-2" >
                                <select class="whiteText p-1 dropdown" id="looking_for_game" name="looking_for_game">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select> 
                            </div>
                        </div>
                        <div class = "col-6 right p-2">
                            <Button class="btn" type="submit"><span class="whiteText px-2 py-2 fs-3">Search</span></Button>
                        </div>
                </form>
                <div>
                    <div class='col-10 text-center'>
                        <h2 class="textCenter"> Fellow Adventures!!!</h2>
                        <table class = "player row">
                        <thead>
                            <tr>
                                <th><h3>Chat Name</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.people.map((person, i)=> (
                                <tr>
                                    <td class='text'>{person.chat_name}</td>
                                </tr>
                            ))}
                        </tbody>                            
                        </table>
                    </div>
                    <Footer/>
                    </div>
                    </div>  
            </div>
           
        )
    }
}



export default Home;