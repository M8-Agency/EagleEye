import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import Find from './containers/Find';
import PhotoUpload from './containers/PhotoUpload';
import Results from './containers/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/find" component={Find} />
          <Route exact path="/find/photo-upload" component={PhotoUpload} />
          <Route exact path="/find/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
