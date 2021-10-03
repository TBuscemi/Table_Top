import React from "react";
import Footer from "../../footer/Footer";
import ReactPlayer from "react-player";





class TutorialsPartyLeader extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        console.log (this.props.accountData)
        // console.log (accountData)
    }

    render(){
        return(
            <div>
                <label for="D&D">D&D: </label>
                <input type="text" name="D&D" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br></br>
                
                <label for="Pathfinder">PathFinder: </label>
                <input type="text" name="Pathfinder" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br></br>

                <label for="Roll20">Roll20: </label>
                <input type="text" name="Roll20" onChange={(event) => this.handleChange(event)} value={this.state.email}/><br></br>

                <label for="FantasyGrounds">Fantasy Grounds: </label>
                <input type="text" name="FantasyGrounds" onChange={(event) => this.handleChange(event)} value={this.state.first_name}/><br></br>
                <div>
                <h6>D&D Tutorial!!</h6>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ZsPrUwcjxEw&ab_channel=Dungeons%26Dragons"/>
                </div>
                <div>
                <label id="platform"for="">Pathfinder Tutorial!!:</label>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=gOqoRPKiahg&ab_channel=HollowTale "/>
                </div>
                <div>
                <h6>D&D Tutorial!!</h6>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ZsPrUwcjxEw&ab_channel=Dungeons%26Dragons"/>
                </div>
                <div>
                <label id="platform"for="">Pathfinder Tutorial!!:</label>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=gOqoRPKiahg&ab_channel=HollowTale "/>
                </div>
                <div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default TutorialsPartyLeader