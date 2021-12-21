import './style/ReactPlayerAdmin.css'
import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Footer from "../../footer/Footer";
import Button from 'react-bootstrap/button';





class ReactPlayerAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            videoData:[],
            dungeon_and_dragons:"",
            pathfinder:"",
            roll20:"",
            fantasy_grounds:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.getVideos(this.props.videoData)
        console.log(this.state.videoData)
    }

    async getVideos(){
        let response = await axios.get('http://127.0.0.1:8000/api/videos/settingupvideos/1/')
        this.setState ({videoData : response.data})
        console.log(response)
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            dungeon_and_dragons:event.target.elements.dungeon_and_dragons.value,   
            pathfinder:event.target.elements.pathfinder.value,   
            roll20:event.target.elements.roll20.value,   
            fantasy_grounds:event.target.elements.fantasy_grounds.value,   
        })
        console.log(this.state)
        let videoData={
            dungeon_and_dragons:event.target.elements.dungeon_and_dragons.value,   
            pathfinder:event.target.elements.pathfinder.value,   
            roll20:event.target.elements.roll20.value,   
            fantasy_grounds:event.target.elements.fantasy_grounds.value,   

        }
        console.log(this.state)
        console.log(videoData)
        this.setVideos(videoData)
    }

    async setVideos(videoData){
        let request =  await axios.get('http://127.0.0.1:8000/api/videos/settingupvideos/1/')
        let vid = request.data
        
        let updateVideo = {
            dungeon_and_dragons:videoData.dungeon_and_dragons,
            pathfinder:videoData.pathfinder,
            roll20:videoData.roll20,
            fantasy_grounds:videoData.fantasy_grounds,
          
           

        }
        console.log(updateVideo)
        axios.put('http://127.0.0.1:8000/api/videos/settingupvideos/1/', updateVideo)
        window.location.reload(false);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label class="text fs-2" for="dungeon_and_dragons">Dungeon & Dragons: </label>
                    <br/>
                    <input class="inputField form-control-lg" type="text" name="dungeon_and_dragons" defaultValue={this.state.videoData.dungeon_and_dragons}/><br></br>
                    
                    <label class="text fs-2" for="Pathfinder">PathFinder: </label>
                    <br/>
                    <input class="inputField form-control-lg"  type="text" name="pathfinder" defaultValue={this.state.videoData.pathfinder}/><br></br>

                    <label class="text fs-2" for="Roll20">Roll20: </label>
                    <br/>
                    <input class="inputField form-control-lg"  name="roll20" defaultValue={this.state.videoData.roll20} /><br></br>

                    <label class="text fs-2" for="FantasyGrounds">Fantasy Grounds: </label>
                    <br/>
                    <input class="inputField form-control-lg"  type="text" name="fantasy_grounds" defaultValue={this.state.videoData.fantasy_grounds} /><br></br>
                    <Button class="m-3 btn" type="submit"><span class="whiteText px-2 py-2 fs-3">Update!!</span></Button>
                </form>
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
export default ReactPlayerAdmin