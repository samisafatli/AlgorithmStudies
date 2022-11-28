// Determine if the number is prime or not

const isPrimeNotOptimal = (n) => {
    if (n<2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if(n%i === 0) return false
    }
    return true
}

const isPrimeOptimal = (n) => {
    if (n<2) {
        return false
    }

    for (let i = 2; i < Math.sqrt(n); i++) {
        if(n%i === 0) return false
    }
    return true
}
 
console.log(isPrimeOptimal(24))  // Big-O = O(sqrt(n))
console.log(isPrimeisPrimeNotOptimal(5)) // Big-O = O(n)