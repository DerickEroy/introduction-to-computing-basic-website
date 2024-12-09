import { toHTMLElement } from '../utils.js';

export class SimplePayrollDisplay {
    entries = [];
    currentId;

    constructor(htmlElems) {
        this.htmlElems = htmlElems;
    }

    addEventListeners() {
        const { createPayrollForm, createPayrollButton, noPayrollYet, deletePayrollButton, payrollEntryIdToDelete } = this.htmlElems;

        createPayrollButton.onclick = (e) => {
            e.preventDefault();

            const payload = Object.fromEntries(new FormData(createPayrollForm));

            if (Object.values(payload).some(e => !e)) return;
            if (noPayrollYet) noPayrollYet.classList.add('hide');

            const {
                employeeName,
                dailyRate,
                daysWorked,
                deductionAmount
            } = payload;

            this.currentId = this.entries.length + 1;

            const entry = {
                id: this.currentId++,
                employeeName,
                dailyRate,
                daysWorked,
                deductionAmount,
                grossPay: daysWorked * dailyRate,
                netPay: (daysWorked * dailyRate) - deductionAmount
            };

            this.entries.push(entry);

            this.renderEntries();
        };

        payrollEntryIdToDelete.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
        }

        deletePayrollButton.onclick = (e) => {
            e.preventDefault();

            const id = Number(payrollEntryIdToDelete.value);

            if (id < 1) return;

            this.entries = this.entries.filter(e => e.id !== id);

            this.entries.forEach((e, index) => e.id = index + 1);

            if (this.entries.length === 0) noPayrollYet.classList.remove('hide');

            this.renderEntries();
        }
    }

    renderEntries() {
        const { payrollTableBody } = this.htmlElems;

        payrollTableBody.innerHTML = '';

        this.entries.forEach(e => {
            const template = `
                <tr id="${e.id}">
                    <td>${e.id}</td>
                    <td>${e.employeeName}</td>
                    <td>${e.dailyRate}</td>
                    <td>${e.daysWorked}</td>
                    <td>${e.deductionAmount}</td>
                    <td>${e.daysWorked * e.dailyRate}</td>
                    <td>${(e.daysWorked * e.dailyRate) - e.deductionAmount}</td>
                </tr>
            `;

            payrollTableBody.appendChild(toHTMLElement(template));
        });
    }

    start() {
        this.addEventListeners();
    }
}