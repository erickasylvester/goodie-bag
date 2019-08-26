import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AllCandies from './allCandies'


const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
        <Link to="/candies">Candies</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>      
        <Switch>
          <Route exact path="/candies" component = {AllCandies} />
        </Switch>
    </div>
    </Router>
  )
}

export default Root
