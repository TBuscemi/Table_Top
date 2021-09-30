import  './Home.css'
import React from 'react';
import axios from 'axios';
import Footer from "../footer/Footer";
import Button from 'react-bootstrap/button';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            people:[]
        }

    }

    componentDidMount(){
        

    }
    
    getFriends(){
        let response = axios.post('http://127.0.0.1:8000/api/account/search/')
        this.setState ({people : response.data})
        console.log(response)

    }


    render(){
        return (
            <div >
                <form onSubmit={(event) => this.getFriends()(event)}>
                <div>
                    <h1 class="textCenter">Looking For Fellow Adventurers?!</h1>
                </div>
                    
                    <div class="platform row">
                <div class="col-4"> </div>
                <div class = "col-2 right"> 
                    <label id="platform"for="">What Platform Do You Wanna Use:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="" name="" form="">
                    <option value="Roll20">Roll20</option>
                    <option value="Fantasy Grounds">Fantasy Grounds</option>
                    </select>
                <div class="col-4"> </div>   
                </div>
                </div>

            
                <div class="system row">
                <div class="col-4"> </div>
                <div class = "col-2 right">  
                    <label id="system" for="">How Should The Adventure Be Told:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="" name="" form="">
                    <option value="Dungeon and Dragons">Dungeon and Dragons</option>
                    <option value="Pathfinder">Pathfinder</option>
                    </select> 
                <div class="col-4"> </div>
                </div>
                </div >
                
                <div class="length row">
                <div class = "col-4">  </div>   
                <div class = "col-2 right">  
                    <label id="length"for="">How Long Will You Adventure For:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="" name="" form="">
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
                    <label id="player"for="">Are You A Player:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="" name="" form="">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>       
                <div class="col-4"> </div>
                </div>   
                </div>
            
                <div class="gm row">
                <div class = "col-4">  </div>      
                <div class = "col-2 right">
                    <label id="gm"for="">Are You A GM:</label>
                    </div>
                    <div class="col-2 left" >
                    <select id="" name="" form="">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                <div class="col-4"> </div> 
                </div>
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
                             <td>{this.state.people.discord}</td>
                             {/* <td>{people.campaign_length}</td>
                             <td>{people.platform_played_on}</td>
                             <td>{people.game_systems_looking_for}</td>
                             <td>{people.description}</td>
                             <td>{people.gm}</td>
                             <td>{people.player}</td> */}
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