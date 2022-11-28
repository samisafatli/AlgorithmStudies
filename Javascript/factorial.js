// Giving an integer N, find the factorial of that integer
// Big-O = O(n)

const factorial = n => {
    const factorialList = []
    for (let i = 0; i < n; i++) {
        factorialList[i] = n - i
    }
    let result = factorialList.reduce((a,b) => a * b)
    return [factorialList, result]
}

console.log(factorial(5))