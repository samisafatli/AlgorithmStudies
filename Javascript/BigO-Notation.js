// It Describes the Complexity of an Algorithm using Algebraic Terms
// Biggest Characteristics:
//     - It is expressed in terms of the input
//     - It focuses on the bigger picture without getting caught up in the minute details


// This is an example of a O(n) complexity, so this means it has a linear complexity.
// It will run N times the code, depending on the Input.
const summationLinear = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

// This is an example of a O(1) complexity, so this means it has a Constanst complexity.
// Line 20 will run only once.
const summationConstant = (n) => {
    return (n * (n + 1)) / 2
}

// This is an example of a O(2) complexity, so this means it has a Quadratic complexity.
const summationQuadratic = (n) => {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            // Some code
        }
    }
}

// This is an example of a O(3) complexity, so this means it has a Cubic complexity.
const summationCubic = (n) => {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            for (let k = 0; k <= j; k++) {
                // Some code
            }
        }
    }
}


const res = summationConstant(2)
console.log(res)