import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import UserList from './containers/user-list';
import UserDetail from './containers/user-detail';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h2>Users</h2>
        <UserList />
        <hr/>
        <h2>User Details</h2>
        <UserDetail />
        <Footer />
      </div>
    );
  }
}


export default App;
