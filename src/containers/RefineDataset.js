import React, {Component} from 'react';
import {connect} from 'react-redux';
import RefineDatasetContent from '../components/RefineDatasetContent';

 class RefineDataset extends Component {
    render() {
        const {selectedDatasetArr} = this.props;
        return (
            <RefineDatasetContent selectedDatasetArr ={selectedDatasetArr} />
        );
    }
}

function mapStateToProps(state) {
    return {selectedDatasetArr: state.selectedDataset}
}

export default connect(mapStateToProps)(RefineDataset);