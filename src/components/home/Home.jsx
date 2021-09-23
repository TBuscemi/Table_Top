import  './Home.css'


const Home = () => {
  

    return (
        <div >
            <div>
                <h1 id="bigCenterText" class="text-center">Looking For Fellow Adventurers?!</h1>
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
            </div>
            
        </div>
    )
}



export default Home;