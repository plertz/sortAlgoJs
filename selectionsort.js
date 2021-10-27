function selectionSort(input){
    for (let i = 0; i < input.length; i++) {
        let min = i;
        for (let j = (i + 1); j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j
            }; 
        }
        if (min != i) {
            let prev = input[i];
            input[i] = input[min];
            input[min] = prev     
        }
    }
    return input;
}

const data = [12, 3, 5, 1, -9, 12, 3, 4]

console.log(selectionSort(data));