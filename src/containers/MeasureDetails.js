import React, { Component } from 'react';
import SelectDataset from '../components/SelectDataset';
import SelectDataset from '../components/RefineDataset';

class MeasureDetails extends Component {
    render() {
        return(
            <div>
              <SelectDataset />
              <RefineDataset />
            </div>
        );
    }
}