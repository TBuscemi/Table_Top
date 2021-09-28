import React from "react";
import ReactPlayer from 'react-player'
import Footer from "../footer/Footer";




class Tutorials extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <div>

                <label id="platform"for="">D&D Tutorial!!:</label>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ZsPrUwcjxEw&ab_channel=Dungeons%26Dragons"/>
                </div>
                <div>
                <label id="platform"for="">Pathfinder Tutorial!!:</label>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=gOqoRPKiahg&ab_channel=HollowTale "/>
                </div>
                <div>
                   <Footer/>
                </div>
            </div>
        )
    }
}
export default Tutorials