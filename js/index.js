import { IncomeTaxCalculatorDisplay } from "./displays/IncomeTaxCalculatorDisplay.js";
import { NthNumberComputationsDisplay } from "./displays/NthNumberComputationsDisplay.js";
import { SimplePayrollDisplay } from "./displays/SimplePayrollDisplay.js";
import { UnitConversionDisplay } from "./displays/UnitConversionDisplay.js";

// Unit Converter
const unitConverterValue = document.getElementById('unitConverterValue');
const unitConverterUnit = document.getElementById('unitConverterUnit');
const unitConverterTo = document.getElementById('unitConverterTo');
const unitConverterResult = document.getElementById('unitConverterResult');
const unitConverterConvertButton = document.getElementById('unitConverterConvertButton');

const unitConversionDisplay = new UnitConversionDisplay({
    unitConverterValue, unitConverterUnit, unitConverterTo, unitConverterResult, unitConverterConvertButton
});

unitConversionDisplay.start();

// Income Tax Calculator
const income = document.getElementById('income');
const basis = document.getElementById('basis');
const excessRate = document.getElementById('excessRate');
const tax = document.getElementById('tax');

const incomeTaxCalculatorDisplay = new IncomeTaxCalculatorDisplay({
    income, basis, excessRate, tax
});

incomeTaxCalculatorDisplay.start();

// Nth Number Computations
const nthFactorial = document.getElementById('nthFactorial');
const nthFactorialResult = document.getElementById('nthFactorialResult');
const sumOfFirstNNumbers = document.getElementById('sumOfFirstNNumbers');
const sumOfFirstNNumbersResult = document.getElementById('sumOfFirstNNumbersResult');
const averageOfFirstNNumbers = document.getElementById('averageOfFirstNNumbers');
const averageOfFirstNNumbersResult = document.getElementById('averageOfFirstNNumbersResult');

const nthNumberComputationsDisplay = new NthNumberComputationsDisplay({
    nthFactorial, nthFactorialResult, sumOfFirstNNumbers, sumOfFirstNNumbersResult, averageOfFirstNNumbers, averageOfFirstNNumbersResult
});

nthNumberComputationsDisplay.start();

// Simple Payroll
const createPayrollButton = document.getElementById('createPayrollButton');
const createPayrollForm = document.getElementById('createPayrollForm');
const payrollTableBody = document.getElementById('payrollTableBody');
const noPayrollYet = document.getElementById('noPayrollYet');
const deletePayrollButton = document.getElementById('deletePayrollButton');
const payrollEntryIdToDelete = document.getElementById('payrollEntryIdToDelete');

const simplePayrollDisplay = new SimplePayrollDisplay({
    createPayrollButton, createPayrollForm, payrollTableBody, noPayrollYet, deletePayrollButton, payrollEntryIdToDelete
});

simplePayrollDisplay.start();