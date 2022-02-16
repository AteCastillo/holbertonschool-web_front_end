function countPrimeNumbers() {
    let count = 1;
    for (var i = 2; i < 101; i++) {
        for (var j = 2; j < 101; j++) {
            if (!(i % j === 0))
                count++;
        }
    }
}
const tStart = performance.now();
countPrimeNumbers();
const tEnd = performance.now();
let timeAdj = tEnd - tStart;
console.log("Execution time of printing countPrimeNumbers was " + timeAdj + " milliseconds.");