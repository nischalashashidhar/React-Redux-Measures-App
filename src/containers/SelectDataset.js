import React, { Component } from 'react';
import {connect} from 'react-redux';
import SelectDatasetContent from '../components/SelectDatasetContent';
import selectedDataset from '../store/selectDataset/action';

class SelectDataset extends Component {

    constructor(props) {
        super(props);
        this.state={datasetArr: []}
    }

    handleCheckboxChange(checked, data) {
        const {dispatch} = this.props;
        let datasetArray = this.state.datasetArr;
        if(checked === true) {
            datasetArray.push(data)
        } else if(checked === false) {
            let index = datasetArray.indexOf(data);
            if(index !== -1) {
                datasetArray.splice(index, 1)
            }
        }
        this.setState({datasetArr: datasetArray})
        dispatch(selectedDataset(this.state.datasetArr))
    }

    onClickHandleForNext() {
      const {history} = this.props;
     history.push('/refineDataSet');
    }

    render() {
        return(
            <SelectDatasetContent handleCheckboxChange={(checked, data) => this.handleCheckboxChange(checked, data)} {... this.state}/>
        );
    }
}

export default connect()(SelectDataset);