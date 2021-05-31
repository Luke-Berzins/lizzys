import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Nav from './Nav.js'
import './App.css';



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

