import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Find from './containers/Find';

import Report from './containers/Report';
import Find from './containers/Find';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/report-person" component={Report} />
=======
>>>>>>> started on Find
          <Route exact path="/find" component={Find} />
        </div>
      </Router>
    );
  }
}

export default App;
