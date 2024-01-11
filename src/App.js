import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import"./App.css"
import RowPost from './Components/RowPost/RowPost';
import {action,Originals} from './urls'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={Originals} title="Netflix Originals"/>
     <RowPost url={action} title="Action"isSmall/>
     <RowPost url={action} title="Action"isSmall/>
    </div>
  );
}

export default App;