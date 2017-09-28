import React, { Component } from 'react';
import Navigation from './Navigation';

import '../assets/stylesheets/RefineDataset.scss';

export default class RefineDatasetContent extends Component {
    render() {
        const {selectedDatasetArr} = this.props;

        return(
             <div className='refine-dataset'>
                <div className='exist-text'><div className='text'>Merge Datasets</div></div>
                <div className='dash'> </div>
                <div className='selected-ds'>
                    <div className='ds1 text'>{selectedDatasetArr[0]}</div>
                    <div className='ds2 text'>{selectedDatasetArr[1]}</div>
                </div>
                <div className='dash'> </div>
                 <Navigation />
                </div>
        );
    }
}