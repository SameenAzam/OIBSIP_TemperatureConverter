function convertTemperature() {
    let inputTemp = document.getElementById('inputTemp').value;
    if (inputTemp === '') {
        alert('Please enter a temperature value.');
        return;
    }

    let convertTo = document.querySelector('input[name="convertTo"]:checked').value;
    let result;

    if (convertTo === 'celsius') {
        result = (inputTemp - 32) * 5/9;
        document.getElementById('result').innerText = `${inputTemp}° Fahrenheit is ${result.toFixed(2)}° Celsius`;
    } else {
        result = (inputTemp * 9/5) + 32;
        document.getElementById('result').innerText = `${inputTemp}° Celsius is ${result.toFixed(2)}° Fahrenheit`;
    }
}
