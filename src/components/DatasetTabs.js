import Paper from 'react-md/lib/Papers';
import React, {Component} from 'react';

export default class DatasetTabs extends Component {
    render(){
        const {tabToDisplay} = this.props;
        return(
            <Paper>
                <div className='measure-details-head'>
                    <div className='select-dataset-div' onClick={(tabName) => tabToDisplay('selectDS')}>
                        <div className='tab-number'>
                            <div>1</div>
                        </div>
                    <div className='tab-label'>Select Dataset</div>
                    </div>
                                 
                    <div className='refine-dataset-div' onClick={(tabName) => tabToDisplay('refineDS')}>
                        <div className='tab-number'>
                            <div>2</div>
                        </div>
                    <div className='tab-label'>Refine Dataset</div>
                    </div>
{/* 
                    <AddComputations />
                    <OutputAttributes />
                    <Summary /> */}
                </div>
          
            </Paper>
        );
    }
}