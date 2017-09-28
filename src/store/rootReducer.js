import { combineReducers } from 'redux';
import  createMeasure  from './newMeasure/reducer';
import selectedDataset from './selectDataset/reducer';


const rootReducer = combineReducers({
    createMeasure: createMeasure,
    selectedDataset: selectedDataset
});

export default rootReducer;