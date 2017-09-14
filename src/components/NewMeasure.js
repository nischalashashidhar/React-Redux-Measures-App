import Paper from 'react-md/lib/Papers';
import React, {Component} from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

import '../assets/stylesheets/NewMeasure.scss';

export class NewMeasure extends Component {
    createNewMeasureFields(){
        return(
            <div className='page-container'>
           <Paper>
               
                <div className='measure-details-head'>
                    <div className='tab-number'>
                        <span>1</span>
                    </div>
                    <div className='tab-label'>Measure Details</div>
                </div>
                <div className='new-measure-content'>
                    <div className='measure-name'>
                    <div className='measure-name-div'>
                        <div className='measure-name-icon'></div>
                    </div>
                    <TextField
                        placeholder="Enter Measure Name"
                        lineDirection="right"
                        className="md-cell md-cell--bottom"
                        />
                    </div>
                    <div className='measure-description'>
                     <div className='measure-description-div'>
                         <div className='measure-description-icon'></div>
                     </div>
                    <TextField
                        placeholder="Enter Description"
                        rows={2}
                        maxRows={4}
                        className="md-cell md-cell--bottom"
                    />
                    </div>
                    <Button raised label="Create Measure" />
                 </div>
            </Paper>
            </div>
        );
    }

    render() {
        return(
            <div>
            {this.createNewMeasureFields()}           
            </div>
        );
    }

}

export default NewMeasure;