import React from 'react';
import './App.css';
import SearchPage from './components/searchPage/searchpage'
import Trending from './components/Trending/trending'
import NewApp from './newApp';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';



class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router className="navRoutes">
         <div className="nav navRoutes">
        
            <Link className="navLinks" to="/">Home</Link>
            <Link className="navLinks" to="/Trending">Trending</Link>
            <Link className="navLinks" to="/Search">Search</Link>
        </div>  
        <Switch>
            <Route path="/" exact component={NewApp} />
            <Route path="/Trending/" component={Trending} />
            <Route path="/Search/" component={SearchPage} />
          </Switch>
          </Router>
      </div>

    );

  }
}

export default App;
