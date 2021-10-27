function countingSort(input, min, max) {
    let i = min
    let j = 0;
    let count = [];

    for (i; i <= max; i++) {
        count[i] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        count[input[i]] += 1;
    }

    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            input[j] = i;
            j++;
            count[i]--; 
        }
    }

    return input;
}

const num = [1, 3, 3, 9];

console.log(countingSort(num, 0, 10));