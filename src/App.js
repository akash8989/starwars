import React , { useState, useEffect} from 'react'
import Navbars from './components/Navbars';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import People from './components/People';
import Home from './components/Home';

const App = () => {
  const [people, setPeople] = useState([]);
  

  useEffect(() =>{
    async function fetchPeople(){
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople( data.results);
    }
    fetchPeople()
  }, [])
  console.log('data', people);

  return (
    <>
    <Router>
      <Navbars />
      <Container>
        <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path = '/people'>
            <People/>
          </Route>
        </Routes>
      </Container>
    </Router>
    </>
  )
}

export default App
