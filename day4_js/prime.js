function checkPrime(inputNum) {
    root = Math.ceil(Math.sqrt(inputNum))
    for(let i = 2; i <= root; i++) {
        if (inputNum % i == 0) {
            prime = false
            console.log(i)
            return false
        }
    }
    return true
}

inputNum = 55
if (checkPrime(inputNum))
    console.log(`${inputNum} is a Prime number`)
else
    console.log(`${inputNum} is not a Prime number`)