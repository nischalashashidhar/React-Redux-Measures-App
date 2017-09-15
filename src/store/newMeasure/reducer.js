import { CREATE_MEASURE } from './action';

export default function createMeasure(state = {}, action) {
    switch(action.type) {
        case CREATE_MEASURE:
            let newState = Object.assign({}, state, {measureData: action.measureData});
            return newState;
        default:
            return state;
    }
}