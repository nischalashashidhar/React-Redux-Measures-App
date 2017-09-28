import {SELECTED_DATASET} from './action';

export default function selectedDataset(state={}, action) {
    switch(action.type) {
        case SELECTED_DATASET:
            let newState =  Object.assign({}, state, action.selectedDSArr);
            console.log(newState);
            return newState;
        default:
            return state;
    }

}