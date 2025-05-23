const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 11;

const RecursiveBinarySearch = (arr, target) => {
    if (arr.length === 0) {
        return false;
    } else {
        let mid = Math.floor(arr.length / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            return RecursiveBinarySearch(arr.slice(mid + 1), target);
        } else {
            return RecursiveBinarySearch(arr.slice(0, mid), target);
        }
    }
}

const result = RecursiveBinarySearch(arr, target);

console.log(result); // Expected output: index of target or -1 if not found