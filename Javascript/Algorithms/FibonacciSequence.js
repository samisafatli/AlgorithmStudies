function FibonacciSequence(n) {
    let fibonacciSeq = [0, 1]

    for (let i = 2; i < n; i++) {
        fibonacciSeq[i] = fibonacciSeq[i - 2] + fibonacciSeq[i - 1]
    }

    return fibonacciSeq
}

console.log(FibonacciSequence(7))