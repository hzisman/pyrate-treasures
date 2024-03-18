const levels = {
    1: {
        title: 'Single Element',
        explanation: 'To choose an element use square brackets and then the row and the column seperated by comma.',
        rows: 4,
        cols: 5,
        selected: [10],
        codePrefix: 'island',
    },
    2: {
        title: 'Row of Elements',
        explanation: 'To choose an element use square brackets and then',
        rows: 6,
        cols: 6,
        selected: [0, 6, 12, 18, 24, 30],
        codePrefix: 'island',
    },
    3: {
        title: 'Column of Elements',
        explanation: 'To choose an element use square brackets and then',
        rows: 6,
        cols: 4,
        selected: [8, 9, 10, 11],
        codePrefix: 'island',
    },
    4: {
        title: 'All Elements',
        explanation: 'To choose an element use square brackets and then',
        rows: 2,
        cols: 2,
        selected: [0, 1, 2, 3],
        codePrefix: 'island',
    },
}

export function getLevelDetails(level) {
    return levels[level];
}

export const levelCount = Math.max(...Object.keys(levels).map(key => Number(key)))