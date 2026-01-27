window.alert("Hello, We are the group \"404 Found: Us\"!");

        // Example 1: if / else
        const ageInput = document.getElementById('ageInput');
        const checkAgeBtn = document.getElementById('checkAgeBtn');
        const ageResult = document.getElementById('ageResult');

        checkAgeBtn.addEventListener('click', () => {
            const age = Number(ageInput.value);
            if (isNaN(age)) {
                ageResult.textContent = 'Please enter a valid number for age.';
                ageResult.style.color = 'crimson';
                return;
            }

            // Here is the if / else logic: if age is 18 or older, show Adult, otherwise show Minor.
            if (age >= 18) {
                ageResult.textContent = `You are ${age} years old — Adult.`;
                ageResult.style.color = 'green';
            } else {
                ageResult.textContent = `You are ${age} years old — Minor.`;
                ageResult.style.color = 'blue';
            }
        });

        // Example 2: if / else if / else
        const tempInput = document.getElementById('tempInput');
        const tempBtn = document.getElementById('tempBtn');
        const tempResult = document.getElementById('tempResult');

        tempBtn.addEventListener('click', () => {
            const temp = Number(tempInput.value);
            if (isNaN(temp)) {
                tempResult.textContent = 'Please enter a valid temperature.';
                tempResult.style.color = 'crimson';
                return;
            }

            // if / else if / else chain provides multiple branches depending on the temperature
            if (temp <= 0) {
                tempResult.textContent = 'Freezing! Wear a heavy coat.';
                tempResult.style.color = 'navy';
            } else if (temp <= 20) {
                tempResult.textContent = 'Cool weather. Wear a jacket.';
                tempResult.style.color = 'teal';
            } else if (temp <= 30) {
                tempResult.textContent = 'Nice and warm.';
                tempResult.style.color = 'green';
            } else {
                tempResult.textContent = 'Hot — stay hydrated and stay in the shade.';
                tempResult.style.color = 'orange';
            }
        });

        // Example 3: if / else if / else
        const weatherInput = document.getElementById('weatherInput');
        const weatherBtn = document.getElementById('weatherBtn');
        const weatherResult = document.getElementById('weatherResult');
        let maxNUm ;
        const minNUM = 1;

        weatherBtn.addEventListener('click', () => {
            const weather = weatherInput.value.trim().toLowerCase();

            if (!weather) {
                weatherResult.textContent = 'Please enter a valid weather condition.';
                weatherResult.style.color = 'crimson';
                return;
            }   

            switch (levelSelect) {
                case 'easy' :
                  maxNumber = 5;
                  break;
                case 'normal' :
                  maxNumber = 10;
                  break;
                case 'hard' :
                  maxNumber = 15;
                  break;
            }

        // Corrected comparisons: ===
        if (weather === 'snowy') {
            weatherResult.textContent = 'Freezing! Wear a heavy coat.';
            weatherResult.style.color = 'navy';
        } else if (weather === 'windy') {
            weatherResult.textContent = 'Cool weather. Wear a jacket.';
            weatherResult.style.color = 'teal';
        } else if (weather === 'rainy') {
            weatherResult.textContent = 'It can feel cold when it rains — bring a raincoat!';
            weatherResult.style.color = 'blue';
        } else {
            weatherResult.textContent = 'Hot — stay hydrated and stay in the shade.';
            weatherResult.style.color = 'orange';
        }
    });
