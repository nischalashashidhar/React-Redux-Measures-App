export const CREATE_MEASURE = 'CREATE_MEASURE';

export function createMeasure(measure) {

    return {
        type : CREATE_MEASURE,
        measure: measure
    }
}