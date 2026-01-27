
const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1) {
        console.error('Please enter a valid positive number.');
        resultDiv.textContent = 'Please enter a valid number for number.';
        resultDiv.style.color = 'crimson';
        return;
    }
    // Build the output string with newline
    let output ='';
    for (let i = 1; i <= n; i++) {
       output += 'Counting: ${i}\n';
    }
   resultDiv.style.color = 'green';
   resultDiv.textContent = output;
})

// Clear button to remove output and reset
clearBtn.addEventListener('')