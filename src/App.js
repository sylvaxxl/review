import './App.css';
import React, {useState} from 'react';
import List from './list';
import data from './data';



function App() {
  const [people, setPeople] = useState(data);  
  
  return (
    <div className="App">
      <h1>{people.length} Birthdays Today</h1>
      <List people={people}/>
      <button className="clear_btn" onClick={()=> setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
