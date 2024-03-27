import { padMatrix, getArray } from "./matrix";

/**
 * Create a display map from a given map
 * @param {(number|boolean)[][]} map
 */
export function createDisplayMap(map) {
    /**
     * Returns the details of a specific cell in the display map
     * given its neighbors
     * @param {number} n00
     * @param {number} n01
     * @param {number} n10
     * @param {number} n11
     * 
     * @returns {[number, number]}
     */
    function getTypeFromNeighborhood(n00, n01, n10, n11) {
        const sum = n00 + n01 + n10 + n11;

        const sumMapping = {
            0: [0, 0],
            1: [2, n01 * 1 + n10 * 3 + n11 * 2],
            2: (n00 === n01 || n00 === n10) ? (n00 && n01 ? [3, 3] : [3, n00 + n10]) : [5, n00],
            3: [4, Number(!n01) * 1 + Number(!n10) * 3 + Number(!n11) * 2],
            4: [1, 0]
        };

        return sumMapping[sum] || null; // Handle invalid sum cases
    }

    const rows = map.length;
    const cols = map[0].length;
    let paddedMap = padMatrix(map);
    let displayMap = [];
    for (let i = 0; i < rows + 1; i++) {
        displayMap.push([]);
        for (let j = 0; j < cols + 1; j++) {
            const [tile, rotation] = getTypeFromNeighborhood(
                paddedMap[i][j],
                paddedMap[i][j + 1],
                paddedMap[i + 1][j],
                paddedMap[i + 1][j + 1]
            );
            displayMap.at(-1).push([tile, Number(rotation)]);
        }
    }
    return displayMap;
}

/**
 * Checks if the given location in the map contains a treasure
 * @param {number[]} list
 * @param {number} cols
 * @param {number} i
 * @param {number} j
 */
export function isSelected(list, cols, i, j) {
    return list.includes(i * cols + j);
}


/**
 * Creates the map of the island
 * @param {number} rows 
 * @param {number} cols 
 * @param {number[]} selected 
 * @returns 
 */
export function createMap(rows, cols, selected) {
    return getArray(rows).map((_, i) =>
        getArray(cols).map((_, j) => isSelected(selected, cols, i, j) || Math.random() > 0.5)
    );
}