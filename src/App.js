import React, { Component } from 'react';
import Navbar from './components/navbar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navbar items={[
          {
            children: 'About',
            href: '/',
            isActive: true
          },
          {
            children: 'Projects',
            href: '/',
          },
          {
            children: 'Posts',
            href: '/blog',
          }
        ]} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          { this.props.children }
        </p>
      </div>
    );
  }
}

export default App;
