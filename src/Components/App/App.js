import './App.css';
import Header from '../Header/Header';
import Search from '../../Pages/Search/Search';
import Explore from '../../Pages/Explore/Explore';
import Beer from '../../Pages/Beer/Beer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className='content'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
              <Search />
          </Route>
          <Route path='/explore'>
              <Explore />
          </Route>
          <Route path='/beers/:handle'>
              <Beer />
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
