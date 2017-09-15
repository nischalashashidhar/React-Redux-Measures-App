import Paper from 'react-md/lib/Papers';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabsContainer}  from 'react-md/lib/Tabs';

import SelectDataset from '../components/SelectDataset';
import RefineDataset from '../components/RefineDataset';
import AddComputations from '../components/AddComputations';
import OutputAttributes from '../components/OutputAttributes';
import Summary from '../components/Summary';

import '../assets/stylesheets/MeasureDetails.scss';

class MeasureDetails extends Component {

    render() {
        
        const { measureName } = this.props;

        return(
            <div className='page-container'>
            <div>{`Enter details for ${measureName}`}</div>
            <div className='measure-details'>
            <Paper>
                <div className='measure-details-head'>
                    <SelectDataset />
                    <RefineDataset />
                    <AddComputations />
                    <OutputAttributes />
                    <Summary />
                </div>
           
            </Paper>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        measureName: state.createMeasure.measureData.measureName
    };
    
}

export default connect(mapStateToProps)(MeasureDetails);