function fib (num) {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

function fibonacci (num) {
    let previousNum = 1;
    let currentNum = 1;
    for (let i = 3; i <= num; i++) {
        let tempNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = tempNum;
    }
    return num<=1 ? num : currentNum;
}
