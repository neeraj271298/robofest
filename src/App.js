
import React, { useState , useEffect } from 'react'
import './App.css';
import CardList from './components/CardList';
import axios from 'axios'
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

function App() {

  const [roboObj,setRoboObj] = useState({robots:[] , searchName: ''})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setRoboObj({...roboObj , robots: res.data}))
        .catch(err => console.log(err))
      
  } , [])

  const onSearchChange = (e) => {
    setRoboObj({...roboObj , searchName: e.target.value})
  }



    const filterRobots = roboObj.robots.filter(robot => {
			return robot.name.toLowerCase().includes(roboObj.searchName.toLowerCase());
    });
    
    return (
      <div className="App" >
        <h1 className = "mainHeading"> ROBO FEST </h1>
        <SearchBox searchName={roboObj.searchName} onSearchChange={onSearchChange} />
        <Scroll>
          <CardList robotsArray = {filterRobots} />
        </Scroll>
      </div>
    )
}

export default App
