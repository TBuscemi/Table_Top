import './App.css';
import React,{Component} from 'react';
import jwtDecode from "jwt-decode"
import Site from './components/navSites/Site';
import { AuthProvider } from './components/FirebaseFiles/Context/FBContext';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user:[]
      }
  }

  componentWillMount() {
      this.getUserToken();
      let user=[] 
  }

  getUserToken() {
      let jwt = localStorage.getItem('token');
      try{
          const user = jwtDecode(jwt);
          this.setState({user} )
      } catch (err) {
          console.log(err)
      }
  }
  

  render(){
    return (
     <AuthProvider >
        <div>
          <Site user={this.state.user}/>
        </div>
      </AuthProvider>
    );
    }
}
export default App;

