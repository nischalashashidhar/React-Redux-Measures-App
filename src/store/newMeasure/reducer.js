import { CREATE_MEASURE } from './action';

const initialState = {
    measureName: {}
}

export default function createMeasure(state = initialState, action) {
    switch(action) {
        case CREATE_MEASURE :
            return Object.assign({}, state, {measureName: action.measureName});
        default:
            return state;
    }
}