import './App.css';
import Translations from './components/Translations/Translations'
import Start from './components/Start/Start'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
      <BrowserRouter>
      <NavLink to="/Navbar" component={Navbar}/>
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
