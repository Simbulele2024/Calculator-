let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    // Ensure trigonometric functions are displayed in degrees
    result = result instanceof Number ? result : result 
    document.getElementById('display').value = result.toFixed(2); 
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

