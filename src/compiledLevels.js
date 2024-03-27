const levels = {
    1: {
        title: 'Single Element',
        explanation:
            'In order to choose a single element from a matrix, ' +
            'you should you the row index then the column index seperated by a comma. ' +
            'For example in order to choose the second element in the fouth row use `matrix[3, 1]`',
        rows: 4,
        cols: 5,
        selected: [10],
        codePrefix: 'island',
    },
    2: {
        title: 'More than One Element',
        explanation:
            'You can use tuples to choose more that a single element in a time. ' +
            'For example the expression `matrix[(4, 2), (3, 1)]` selects in the same time ' +
            '`matrix[4, 3]` and `matrix[2, 1]`',
        rows: 4,
        cols: 3,
        selected: [3, 10],
        codePrefix: 'island',
    },
    3: {
        title: 'Row of Elements',
        explanation:
            'When you want to select an entire row you can just you its index, ' +
            'Because the row is the first dimension of this ndarray ' +
            'for example the expression `matrix[2]` selects the entire third row',
        rows: 6,
        cols: 7,
        selected: [28, 29, 30, 31, 32, 33, 34],
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

