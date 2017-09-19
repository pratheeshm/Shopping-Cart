import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import App from '../components/App'
import CheckoutPage from './checkout-page'
class RouterPage extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={App}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
        </div>
      </Router>
    )
  }
}
export default RouterPage
