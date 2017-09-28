export const SELECTED_DATASET = 'SELECTED_DATASET';

export default function selectedDataset(selectedDSArr) {
    console.log(selectedDSArr)
    return {type: SELECTED_DATASET, selectedDSArr}
}