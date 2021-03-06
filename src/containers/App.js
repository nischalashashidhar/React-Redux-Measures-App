import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import NewMeasure from '../containers/NewMeasure';
import MeasureDetails from '../containers/MeasureDetails';
// import RefineDataset from './RefineDataset';

import '../assets/stylesheets/App.scss';

class App extends Component {
  
  render() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
           <div className="App">
              <Route component={NewMeasure} exact path ="/" />
              <Route component={MeasureDetails} exact path ="/measureDetails" />
              {/* <Route component={RefineDataset} exact path='/refineDataSet' /> */}
           </div>
        </Router>
    );
  }
}

export default App;
