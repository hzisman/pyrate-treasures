import numpy as np


def get_selected_cells(rows, cols, selection_expression):
    matrix = np.arange(rows * cols).reshape((rows, cols))
    try:
        result= eval(f'matrix[{selection_expression}]')
        return list(np.array([result]).flatten())

    except BaseException as e:
        return e
