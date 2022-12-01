const bubbleSort = (arr) => {
    let sorted
    do {
        sorted = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                sorted = true
            }
        }
    } while (sorted);
    return arr
}

const arr = [8,20,-2,4,-6]
console.log(arr)
console.log(bubbleSort(arr)) // Time of O(n2) and space of O(1)
