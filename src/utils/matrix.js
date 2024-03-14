import { loadPyodideWithModules } from "./pyodide_utils";
import { loadPyodide } from "pyodide";

export function getArray(size, initValue=null) {
    return Array(size).fill(initValue);
}


export function padMatrix(matrix, padding=0) {
    const cols = matrix[0].length;
    
    return [
        getArray(cols+2, padding),
        ...matrix.map(row => [padding, ...row, padding]),
        getArray(cols+2, padding),
    ]
}

export async function getSelectedCells(rows, cols, selectionExpression) {
    const pyodide = await loadPyodideWithModules('numpy');
    console.log('hi');
    pyodide.runPython(`
        import numpy as np

        matrix = np.arange(${rows} * ${cols}).reshape((${rows}, ${cols}))
        print(matrix)
        try:
            selection = eval('matrix[${selectionExpression}]')
            print(selection)
            if isinstance(selection, np.ndarray):
                result = list(selection)
                print('1', result)
            else:
                result = [selection]
                print('2', result)
        except BaseException as e:
            result = str(e)
    `);

    const result = pyodide.globals.get('result').toJs({ depth: 2 });

    console.log(result)
    return result
}
