// This code is automatically generated from ./content/build-levels.js
export const levels = {
    "1": {
        "title": "Single Element",
        "explanation": "<p>In order to select a single element from a matrix,  you should you the row index then the column index seperated by a comma.  For example in order to choose the second element in the fouth row use <code>matrix[3, 1].</code></p>\n",
        "rows": 4,
        "cols": 5,
        "selected": [
            10
        ],
        "codePrefix": "island"
    },
    "2": {
        "title": "More than One Element",
        "explanation": "<p>You can use tuples to choose more that a single element in a time. For example the expression <code>matrix[(4, 2), (3, 1)]</code> selects in the same time <code>matrix[4, 3]</code> and <code>matrix[2, 1]</code>&#39;.</p>\n",
        "rows": 4,
        "cols": 3,
        "selected": [
            3,
            10
        ],
        "codePrefix": "island"
    },
    "3": {
        "title": "Select an entire row",
        "explanation": "<p>Because the row dimension is the first dimension of a matrix, you can select an entire row by specifing its index. For example the expression <code>matrix[2]</code> selects all the elements in the third row.</p>\n",
        "rows": 6,
        "cols": 7,
        "selected": [
            28,
            29,
            30,
            31,
            32,
            33,
            34
        ],
        "codePrefix": "island"
    },
    "4": {
        "title": "Use Slicing in Numpy Array",
        "explanation": "<p>Each dimension index can be not only number or tuple, but a slice expression similar to how you use it in native python lists.  The syntax is <code>start:end:step</code>&#39;. So if you want to choose only the first 3 element in the second row you can use the  expression: <code>matrix[1, :3]</code>&#39;.\nNote: The <code>end</code> is not included in the selection.</p>\n",
        "rows": 3,
        "cols": 7,
        "selected": [
            18,
            19,
            20
        ],
        "codePrefix": "island"
    },
    "5": {
        "title": "Row Slicing",
        "explanation": "<p>You can apply slicing to any index you want. So you can slice the row indices.</p>\n",
        "rows": 9,
        "cols": 9,
        "selected": [
            34,
            43,
            52,
            61
        ],
        "codePrefix": "island"
    },
    "6": {
        "title": "Use the Step in the Slicing Expression",
        "explanation": "<p>Every trick that you know about regular list slicing in Python will work the same in numpy array, you can use negative indexing, and event change the step size to a number greater that one.</p>\n",
        "rows": 10,
        "cols": 4,
        "selected": [
            2,
            10,
            18,
            26,
            34
        ],
        "codePrefix": "island"
    },
    "7": {
        "title": "Combine Row and Column Slicing",
        "explanation": "<p>You can combine row and column slicing in the same selection. For example: <code>matrix[:2, :2]</code> will select the 4 top left cells.</p>\n",
        "rows": 4,
        "cols": 4,
        "selected": [
            5,
            6,
            9,
            10
        ],
        "codePrefix": "island"
    }
};

export const coinCount = 26;
