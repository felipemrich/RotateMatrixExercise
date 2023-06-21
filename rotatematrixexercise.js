let array = 
[[1,2,3],
[4,5,6],
[7,8,9]];

function swap(A, i, j, k, l) {
    let temp = A[j][i];
    A[j][i] = A[l][k];
    A[l][k] = temp;
}

function transpose(A) {
    let N = A.length;
    for (i = 0; i < N -1; i++) {
        for (j = i + 1; j < N; j++) {
            swap(A, i, j, j, i);
        }
    }
}

function moveCols(A) {
    let N = A.length;
    let n = Math.floor(N/2);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < N; j++) {
            swap(A, i, j, N - 1 - i, j);
        }
    }
}

function rotateMatrix(A) {
    transpose(A);
    moveCols(A);
}



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