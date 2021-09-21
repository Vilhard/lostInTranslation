import './App.css';
import Translations from './components/Translations'
import Start from './components/Start'
import Profile from './components/Profile'
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
          <NavLink to="/profile" component={Profile}/>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/translations" component={Translations} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
