import './App.css';
import Translations from './components/Translations'
import Start from './components/Start'
import Profile from './components/Profile'
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
          <NavLink to="/Navbar" component={Navbar}/>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/translations" component={Translations} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
