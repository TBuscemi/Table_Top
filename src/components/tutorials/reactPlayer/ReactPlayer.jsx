import React from "react";
import ReactPlayer from 'react-player'
import axios from "axios";
import './style/ReactPlayer.css'




class ReactPlayerVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            videoData:[],
            dungeon_and_dragons:"",
            pathfinder:"",
            roll20:"",
            fantasy_grounds:"",
        }
    
    }





    componentDidMount(){
        this.getVideos(this.props.videoData)
    }
   
    async getVideos(){
        let response = await axios.get('http://127.0.0.1:8000/api/videos/settingupvideos/1/')
        this.setState ({videoData : response.data})
        console.log(response)
    }

    render(){
        return(
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <h1 class="textCenter pt-3">D&D Tutorial!!</h1>
                        <div class="container col-6">
                            <ReactPlayer
                                url={this.state.videoData.dungeon_and_dragons}/>
                        </div>
                        <div class="container col-3 pt-5 mt-5">
                            <p class="text fs-5">Watch a video about learning to play the famous Dungeons and Dragons!</p>
                        </div>
                    </div>

                    <div class="row">
                        <h1 class="textCenter pt-5">Pathfinder Tutorial</h1>
                        <div class="container col-6">
                            <ReactPlayer
                                url={this.state.videoData.pathfinder}/>
                        </div>
                        <div class="container col-3 pt-5 mt-5">
                            <p class="text fs-5">Or would you rather watch a video about how to play Pathfinder?  It's based on the best edition of D&D.</p>
                        </div>
                    </div>

                    <div class="row">
                        <h1 class="textCenter pt-5">Roll20 Tutorial</h1>
                        <div class="container col-6">
                            <ReactPlayer
                                url={this.state.videoData.roll20}/>
                        </div>
                        <div class="container col-3 pt-5 mt-5">
                            <p class="text fs-5">Do you need to learn to play the game on the most popular online gaming platform?</p>
                        </div>
                    </div>

                    <div class="row">
                        <h1 class="textCenter pt-5">Fantasy Grounds Tutorial</h1>
                        <div class="container col-6">
                            <ReactPlayer
                                url={this.state.videoData.fantasy_grounds}/>
                        </div>
                        <div class="container col-3 pt-5 mt-5">
                            <p class="text fs-5">Or you can learn on the more advanced platform, Fantasy Grounds.  </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReactPlayerVideo