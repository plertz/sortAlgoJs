const fs = require('fs');

function mergeSort(input){
    function merge(left, right){
        let sorted = [];
        while (left.length && right.length){
            if (left[0] < right[0]) {
                sorted.push(left.shift())
            }
            else{
                sorted.push(right.shift());
            }
        }
        return [...sorted, ...left, ...right];
    }
    if (input.length < 2) {
        return input
    }

    let half = Math.ceil(input.length / 2);
    let left = input.splice(0, half);
    let right = input;
    return merge(mergeSort(left), mergeSort(right));
}

const num = []

for (let i = 0; i < 100; i++) {
    num[i] = (Math.random() * 100000)
}

let numS = JSON.stringify(num, null, 2);
fs.writeFileSync('unsorted.json', numS);

let count = mergeSort(num);

let sorted = JSON.stringify(count, null, 2);
fs.writeFileSync('sorted.json', sorted);