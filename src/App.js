import React, { useEffect } from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import M from 'materialize-css'

import Home from './page/Home'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
