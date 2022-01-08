import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import {Route,Routes} from 'react-router-dom';
import Home from'./Home.js';

function App() {
  return (
     <div className="App">
        <Navbar islogin={false}/>

      <main role="main" className="container">

                <Routes>
                  <Route exact path="/" element={<Home />}/>
                      
                  
                  </Routes>
           </main>
           </div>


  );
}

export default App;
