// Determine if the number is prime or not

const isPowerOf = (number, power) => {
    while(number>1){
        if(number % power !== 0){
            return false
        }
        number = number/power
    }
    return true
}
 
console.log(isPowerOf(5, 2))  // Big-O = O(logN)