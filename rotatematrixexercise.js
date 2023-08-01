// Here I set a 2D array (an array of arrays) from 1 to 9.
let array = 
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]];

// This function makes it possible to swap values between two positions in the 2D array.
function swap(A, i, j, k, l) {
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
}

// This function transposes (inverts rows and columns) the given 2D array.
function transpose(A) {
    let N = A.length;
    for (i = 0; i < N - 1; i++) {
        for (j = i + 1; j < N; j++) {
            // Swap values between (i, j) and (j, i) to transpose the elements.
            swap(A, i, j, j, i);
        }
    }
}

// This function switches columns in the 2D array.
function moveCols(A) {
    let N = A.length;
    let n = Math.floor(N / 2);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < N; j++) {
            // Swap values between (i, j) and (N - 1 - i, j) to move columns.
            swap(A, i, j, N - 1 - i, j);
        }
    }
}

// This function combines the transpose and moveCols functions to rotate the matrix 90 degrees clockwise.
function rotateMatrix(A) {
    // First, transpose the matrix to invert rows and columns.
    transpose(A);
    // Then, switch columns to rotate the matrix.
    moveCols(A);
}

// This function updates the HTML display grid with the data from the 2D array.
function updateGraphics(A) {
    let boxes = document.getElementsByClassName('box');
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            // Update the inner text of each box with the corresponding value from the 2D array.
            boxes[index].innerText = A[i][j];
            index++;
        }
    }
}
