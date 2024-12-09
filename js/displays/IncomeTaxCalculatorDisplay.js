export class IncomeTaxCalculatorDisplay {
    constructor(htmlElems) {
        this.htmlElems = htmlElems;
    }

    addEventListeners() {
        const { income } = this.htmlElems;
        income.oninput = (e) => this.onInputIncome(Number(e.target.value));
    }

    onInputIncome(income) {
        const { tax: taxElem, basis: basisElem, excessRate: excessRateElem } = this.htmlElems;
        const { tax, basis, excessRate } = this.calculateTax(income);
        
        taxElem.value = tax;
        basisElem.value = basis;
        excessRateElem.value = excessRate;
    }

    calculateTax(income) {
        let tax = 0;
        let basis;
        let excessRate;
    
        if (income <= 250000) {
            tax = 0;
            basis = 0;
            excessRate = 0;
        } else if (income <= 400000) {
            tax = (income - 250000) * 0.20;
            basis = 250001;
            excessRate = 0.20;
        } else if (income <= 800000) {
            tax = 30000 + (income - 400000) * 0.25;
            basis = 400001;
            excessRate = 0.25;
        } else if (income <= 2000000) {
            tax = 130000 + (income - 800000) * 0.30;
            basis = 800001;
            excessRate = 0.30;
        } else if (income <= 8000000) {
            tax = 490000 + (income - 2000000) * 0.32;
            basis = 2000001;
            excessRate = 0.32;
        } else if (income > 8000000) {
            tax = 2410000 + (income - 8000000) * 0.35;
            basis = 8000001;
            excessRate = 0.35;
        }

        return { tax, basis, excessRate };
    }

    start() {
        this.addEventListeners();
    }
}