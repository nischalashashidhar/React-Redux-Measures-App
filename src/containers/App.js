import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import NewMeasure from '../components/NewMeasure';
import SelectDataset from '../components/SelectDataset';

import '../assets/stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route component={NewMeasure} exact path ="/new" />
          <Route component={SelectDataset} exact path ="/selectDataset" /> 
        </Router>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    measureName: state.measureName
  }
}

export default withRouter(App);
