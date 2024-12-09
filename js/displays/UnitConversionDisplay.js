export class CelsiusFormula {
    toCelsius(celsius) {
        return celsius;
    }

    toFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }
}

export class FahrenheitFormula {
    toFahrenheit(fahrenheit) {
        return fahrenheit;
    }
    
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}

export class UnitConversionDisplay {
    constructor(htmlElems) {
        this.htmlElems = htmlElems;
        this.celsius = new CelsiusFormula();
        this.fahrenheit = new FahrenheitFormula();
    }

    addEventListeners() {
        const {
            unitConverterValue, unitConverterUnit, unitConverterTo, unitConverterResult, unitConverterConvertButton
        } = this.htmlElems;
        
        unitConverterConvertButton.onclick = (e) => {
            e.preventDefault();

            const unit = unitConverterUnit.value;
            const value = unitConverterValue.value;
            const to = unitConverterTo.value;
            
            const result = this.convert(unit, value, to);

            unitConverterResult.value = result.value;
        }
    }

    convert(unit, value, to) {
        const newValue = this[unit.toLowerCase()][`to${to.charAt(0).toUpperCase() + to.slice(1)}`](value);
        
        return {
            unit: to,
            value: String(newValue)
        };
    }

    start() {
        this.addEventListeners();
    }
}