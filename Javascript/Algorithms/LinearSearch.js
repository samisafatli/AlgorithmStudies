const arr = [5, 3, 8, 4, 2];
const target = 4;

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const result = linearSearch(arr, target);

console.log(result); // Expected output: index of target or -1 if not found