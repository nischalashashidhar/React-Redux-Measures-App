import React, { Component } from 'react';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import Chip from 'react-md/lib/Chips';
import Navigation from './Navigation';

import '../assets/stylesheets/SelectDataset.scss';
import { datasetList } from '../utils/Dataset'

export default class SelectDatasetContent extends Component {
     
    renderExistingDS() {
        return (
            datasetList.map((data, index) => (
                    <div className='dataset' key={index}>
                        <Checkbox id={index} name="dataset" key={index} onChange={event => this.props.handleCheckboxChange(event, data.name)}/>
                        <div className='dataset-name'>{data.name}</div>
                        <div className='dataset-desc'>{data.text}</div>
                    </div>
            ))
        );
    }

  

    removeTagClick() {
        alert()
    }

    renderSelectedDSTags() {
        const selectedDSArr = this.props.datasetArr;
        return(selectedDSArr !== undefined ?  (selectedDSArr.map((dataset, index) => (
            <Chip key={index} label={dataset} removable onClick={() => this.removeTagClick()}/>
        ))) : null);
    }
    
    // onClickHandleForNext() {
    //    his 
    // }

    render() {
        return(
            <div className='select-dataset'>
                <div className='exist-text'><div className='text'>Existing Datasets</div></div>
                <div className='dash'> </div>
                <div className='content'>
                    <div className=''><div className='text'>Sales Planning Output - 10 datasets</div></div>
                        {this.renderExistingDS()}
                    <div className='selected-dataset'>
                        <div className='text'>Selected Datasets</div>
                        <div className='separator'></div>
                        <div className='chip'>
                            {this.renderSelectedDSTags()}
                        </div>
                       <Navigation />
                    </div>
                </div>
            </div>
        );
    }
}