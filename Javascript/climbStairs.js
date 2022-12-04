const climbStaircase = (n) => {
    const numberOfWays = [1,2]
    for (let i = 2; i < n; i++) {
        console.log(numberOfWays[i - 1])
        numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2]
    }
    return numberOfWays[n-1]
}
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
// Fibonacci Suquence
// Big-O = O(n)
console.log(climbStaircase(10))

