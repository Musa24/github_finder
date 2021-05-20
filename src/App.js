import React, { Fragment, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';

function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Searching users
  const searchUsers = async (searchQuery) => {
    setLoading({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  //Get a single Gituhub user
  const getUser = async (username) => {
    setLoading({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);

    setUser(res.data);
    setLoading(false);
  };

  //Get a single Gituhub user
  const getUserRepos = async (username) => {
    setLoading({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    setRepos(res.data);
    setLoading(false);
  };
  const clearUsers = () => {
    setUsers([]);
  };

  //setAlert
  const setalert = (msg, type) => {
    setAlert({ msg, alert });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClearBtn={users.length > 0 ? true : false}
                    setAlert={setalert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />

            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  loading={loading}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
