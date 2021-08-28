import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Main from "./components/MainPage/Main"
import Blog from "./components/Blog"

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route>
          <title>404 Not Found</title>
          <p>Sorry, the page you are looking for does not exist</p>
          <Link to="/">Back to homepage</Link>
        </Route>
      </Switch>
    </div>
  </Router>
)
export default Routes
