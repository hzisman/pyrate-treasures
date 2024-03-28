import { loadPyodideWithModules } from "./pyodide_utils";

/** 
 * @param {number} size
 * @param {*} initValue 
 **/
export function getArray(size, initValue=null) {
    return Array(size).fill(initValue);
}



/**
 * @param {any[]} arr0
 * @param {any[]} arr1
 */
export function containSameValues(arr0, arr1) {

    const arrayToString = (/** @type {any[]} */ a) => a.sort().join(', ');
    return arrayToString(arr0) === arrayToString(arr1);
}


/** @param {any[][]} matrix */
export function padMatrix(matrix, padding=0) {
    const cols = matrix[0].length;
    
    return [
        getArray(cols+2, padding),
        ...matrix.map(row => [padding, ...row, padding]),
        getArray(cols+2, padding),
    ]
}

/**
 * 
 * @param {number} rows 
 * @param {number} cols 
 * @param {string} selectionExpression 
 * @returns 
 */
export async function getSelectedCells(rows, cols, selectionExpression) {
    const pyodide = await loadPyodideWithModules('numpy');

    const result = pyodide.runPython(`
        import numpy as np

        def get_selected_cells():
            matrix = np.arange(${rows} * ${cols}).reshape((${rows}, ${cols}))
            try:
                selection = eval('matrix[${selectionExpression}]')
                if isinstance(selection, np.ndarray):
                    return selection
                else:
                    return int(selection)
            except BaseException as e:
                return str(e)

        get_selected_cells()
    `);

    let array;
    if (typeof result === 'string') { // Error scenario
        return result;
    } else if (result === Object(result)) { // If the result is an object
        array = Array.from(result.toJs()).map(
            v => ArrayBuffer.isView(v) ? Array.from(v) : v
        );
    } else { // If the result is a primitive value
        array = [result];
    }

    return array.flat();
}
