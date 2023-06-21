// Here i set a  2DArray(Arrays of arrays) from 1 to 9.

let array = 
[[1,2,3],
[4,5,6],
[7,8,9]];

// This function makes possible positions change
function swap(A, i, j, k, l) {
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
}

// Transpose invert rowns and columns
function transpose(A) {
    let N = A.length;
    for (i = 0; i < N -1; i++) {
        for (j = i + 1; j < N; j++) {
            swap(A, i, j, j, i);
        }
    }
}

// Switch columns 
function moveCols(A) {
    let N = A.length;
    let n = Math.floor(N/2);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < N; j++) {
            swap(A, i, j, N - 1 - i, j);
        }
    }
}


// Combine transpose and movecols to make it possible to rotate the matrix
function rotateMatrix(A) {
    transpose(A);
    moveCols(A);
}

// Append the data into the display grid
function updateGraphics(A) {
    let boxes = document.getElementsByClassName('box');
    let index = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            boxes[index].innerText = A[i][j];
            index++;
        }
    }
}
