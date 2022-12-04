const cartesianProduct = (arr1, arr2) => {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]

console.log(cartesianProduct(arr1, arr2)) // Time of O(m*n) depends on lenght of Array1 and Array2
