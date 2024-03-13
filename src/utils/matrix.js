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

