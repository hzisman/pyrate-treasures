/**
 * @param {number} a
 * @param {number} b
 */
export function rand(a, b=undefined) {
    if (b === undefined) {
        b = a;
        a = 0;
    }
    
    return Math.random() * (b - a) + a;
}

/**
 * @param {number} a
 * @param {number} b
 */
export function randInt(a, b=undefined) {
    return Math.floor(rand(a, b));
}