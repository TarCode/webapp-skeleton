import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Auth from './views/auth'
import List from './views/list'

export default class extends Component {
  render () {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
      <Router>
        <div>
          {
            user ?
            <Route path="/" component={List} /> :
            <Route path="/" exact component={Auth} />

          }
        </div>
      </Router>
    )
  }
}