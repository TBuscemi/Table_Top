import './App.css';
import React from 'react';
import Site from './components/navSites/Site';
import Footer from './components/footer/Footer';



function App() {


  return (
    <div className="App" style={{
      backgroundColor: 'darkgreen',
      backgroundSize: 'cover',
      height: '100vh'
    }}>
      <Site/>
      <Footer/>
    </div>
  );
}
export default App;

