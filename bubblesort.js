function bubbleSort(input){
    let swapped
    do {
        swapped = false;
        for (let i = 0; i < input.length; i++) {
            if (input[i] > input[i + 1]) {
                let prev = input[i + 1];
                input[i + 1] = input[i];
                input[i] = prev;
                swapped = true;
            }   
        }   
    } 
    while (swapped == true);

    return input;
}

const inp = [3, 6, 5, 7, 9, 0, -3, 1];
console.log(inp);

console.log(bubbleSort(inp));