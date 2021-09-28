import './App.css';
import React,{Component} from 'react';
import jwtDecode from "jwt-decode"
import Site from './components/navSites/Site';
import Account from './components/account/Account';
import AccountInfo from './components/account/accountInfo/AccountInfo';
// import Footer from './components/footer/Footer';




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
  
      console.log(jwt)
      try{
          const user = jwtDecode(jwt);
          console.log("jwt"+user);
          this.setState({user} )
          console.log(this.state)
      } catch (err) {
          console.log(err)
      }
  }
  

  render(){
    return (
     
      <div className="App" style={{
        backgroundColor: 'darkgreen',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <Site user={this.state.user}/>
        {/* <Footer/> */}
      </div>
    );
    }
}
export default App;

