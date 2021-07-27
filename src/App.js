import './App.css';
import Home from './home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Moviesdetails from './components/MoviesDetails';
import Searchpage from './components/searchPage';
import Login from './components/Loginpage';





function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movie/:movieid" exact component={Moviesdetails}/>
        <Route path="/search/:searchquery" exact component={Searchpage}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
