import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../../Pages/Search/Search';
import Explore from '../../Pages/Explore/Explore';
import Beer from '../../Pages/Beer/Beer';
import Preloader from '../Preloader/Preloader';
import { ScrollToTop } from '../Helpers/Functions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App(props) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    window.onload = function() {
      setTimeout(() => {
        setLoad(false);
      }, 2000)
    }
    
  }, [])

  return (

    <div className='content'>
      { load ?
        <Preloader load={load}/>
      :
      <Router>
        <Preloader load={load}/>
        <ScrollToTop />
        <Header load={load} />
        <Switch>
          <Route exact path='/'>
              <Search load={load} />
          </Route>
          <Route path='/explore'>
              <Explore load={load} />
          </Route>
          <Route path='/beers/:handle'>
              <Beer load={load} />
          </Route>
        </Switch>
      </Router>  
    }
    </div>
  );
}

export default App;
