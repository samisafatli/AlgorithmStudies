// Binary Search Algorithm
// Works only on sorted arrays by dividing the search interval in half repeatedly.
// You compare the target to the middle element, if it's equal, you return the index.
// If the target is less than the middle element, you search the left half.
// If the target is greater, you search the right half.
// Time Complexity: O(log n)
// Space Complexity: O(1)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 4;

const BinarySearch = (arr, target) => {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return -1;
}

const result = BinarySearch(arr, target);

console.log(result); // Expected output: index of target or -1 if not found