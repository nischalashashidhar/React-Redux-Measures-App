import Paper from 'react-md/lib/Papers';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Tabs, Tab, TabsContainer}  from 'react-md/lib/Tabs';

import DatasetTabs from '../components/DatasetTabs';
import SelectDataset from '../containers/SelectDataset';
import RefineDataset from '../containers/RefineDataset';
import AddComputations from '../components/AddComputations';
import OutputAttributes from '../components/OutputAttributes';
import Summary from '../components/Summary';

import '../assets/stylesheets/MeasureDetails.scss';

class MeasureDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state= { tabClicked : 'selectDS'}
    }

    tabToDisplay(tabName) {
        switch(tabName) {
            case 'selectDS':
             return this.setState({tabClicked:'selectDS'});
            case 'refineDS':
            return this.setState({tabClicked: 'refineDS'});
        }
    }

    renderSelectedTab() {
        let tabName = this.state.tabClicked;
        let contentToRender = '';
        switch(tabName.toUpperCase()) {
            case 'SELECTDS': 
                return contentToRender = <SelectDataset />;
            case 'REFINEDS':
                return contentToRender = <RefineDataset />
        }
    }

    render() {
        
        const { measureName, history } = this.props;

        if(measureName !== undefined) {
            return(
            <div className='page-container'>
            <div className='measure-details'>
            <div className='measure-entered'>{`Enter details for ${measureName}`}</div>
            <DatasetTabs tabToDisplay={(tabName) => this.tabToDisplay(tabName)}/>
             {this.renderSelectedTab()}
            </div>
            </div>
        );
        } else {
           return <Redirect to={'/'} />;
        }
        
    }
}

function mapStateToProps(state) {
    if(state.createMeasure.measureData !== undefined) {
        return {
        measureName: state.createMeasure.measureData.measureName
        };
    } 
}

export default connect(mapStateToProps)(MeasureDetails);