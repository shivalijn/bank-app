import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from "./components/create-account.component";
import AccountsList from "./components/accounts-list.component";
import Account from "./components/account.component";
import './App.css';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Bank Application</Link>
        <div className="">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Accounts</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Account</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component={AccountsList} />
      <Route path="/create" exact component={CreateAccount} />
      <Route path="/accounts/:id" component={Account} />
    </div>
    </Router>
  );
  }
}

export default App;
