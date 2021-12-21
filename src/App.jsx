import './App.css';
import React,{Component} from 'react';
import Site from './components/navSites/Site';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user:[]
      }
  }

  render(){
    return (
     
      <div>
        <Site user={this.state.user}/>
      </div>
    );
    }
}
export default App;

