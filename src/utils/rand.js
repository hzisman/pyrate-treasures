export function rand(a, b) {
    if (b === undefined) {
        b = a;
        a = 0;
    }
    
    return Math.random() * (b - a) + a;
}

export function randInt(a, b) {
    return Math.floor(rand(a, b));
}