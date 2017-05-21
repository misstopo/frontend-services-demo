import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <h1><img src="../img/MatchSite_white.png"/></h1>
        </header>
        <div className="app-content mui-container-fluid">
          {this.props.children}
        </div>
        <footer>
          <p>Prototype of Services condensed to one place.</p>
        </footer>
      </div>
    );
  }
}