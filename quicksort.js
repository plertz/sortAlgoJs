function quickSort(input) {
    if (input.length <= 1) {
        return input
    }
    
    let left = []
    let right = []
    let pivot = [input.pop()]

    for (let i = 0; i < input.length; i++) {
        if (pivot[0] == input[i]) {
            pivot.push(input[i]);  
        } 
        else if (pivot[0] > input[i]){
            left.push(input[i]);
        }
        else{
            right.push(input[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    return [...left, ...pivot, ...right];
}

const num = [2, 4, 8, 12, -4 , -3, 4, 2, 6, 1];
 
console.log(quickSort(num));