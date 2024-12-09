export class NthNumberComputationsDisplay {
    constructor(htmlElems) {
        this.htmlElems = htmlElems;
    }

    addEventListeners() {
        const {
                nthFactorial, nthFactorialResult,
                sumOfFirstNNumbers, sumOfFirstNNumbersResult,
                averageOfFirstNNumbers, averageOfFirstNNumbersResult
        } = this.htmlElems;

        nthFactorial.oninput = (e) => {
            const result = this.nthFactorial(parseInt(e.target.value));
            nthFactorialResult.value = result;
        };

        sumOfFirstNNumbers.oninput = (e) => {
            const result = this.sumOfFirstNNumbers(parseInt(e.target.value));
            sumOfFirstNNumbersResult.value = result;
        }

        averageOfFirstNNumbers.oninput = (e) => {
            const result = this.averageOfFirstNNumbers(parseInt(e.target.value));
            averageOfFirstNNumbersResult.value = result;
        }
    }

    nthFactorial(value) {
        let n = value;

        let result = 1;
        while (n > 1) result *= n--;

        return result;
    }

    sumOfFirstNNumbers(value) {
        const n = parseInt(value);
        let sum = 0, i = 1;
        do { sum += i++; } while (i <= n);

        return sum;
    }

    averageOfFirstNNumbers(value) {
        const n = parseInt(value);

        let sum = 0;
        for (let i = 1; i <= n; i++) sum += i;

        return (sum / n).toFixed(2);
    }

    start() {
        this.addEventListeners();
    }
}