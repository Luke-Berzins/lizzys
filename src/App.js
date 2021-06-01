import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Nav from './components/Nav.js'
import './App.css';
import Running from './pages/Running'
import Cooking from './pages/Cooking'
import Home from './pages/Home'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/cooking">
            <Cooking />
          </Route>
          <Route path="/running">
            <Running />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

