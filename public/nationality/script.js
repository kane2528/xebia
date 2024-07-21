function addCountry(type) {
    const input = document.getElementById(type + 'Input');
    const countryName = input.value.trim();
    if (countryName) {
        const optionsDiv = document.getElementById(type + 'Options');
        const id = type + countryName.replace(/\s+/g, '');
        const newRadio = document.createElement('input');
        newRadio.type = 'radio';
        newRadio.id = id;
        newRadio.name = type;
        newRadio.value = countryName;

        const newLabel = document.createElement('label');
        newLabel.htmlFor = id;

        // AJAX call to get the flag URL
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const countryData = data.find(country => country.name.common.toLowerCase() === countryName.toLowerCase());
                    const flagUrl = countryData ? countryData.flags.png : '';
                    if (flagUrl) {
                        const optionDiv = document.createElement('div');
                        optionDiv.classList.add('option');
                        newLabel.innerHTML = `<img src="${flagUrl}" alt="${countryName} Flag"> ${countryName}`;
                        optionDiv.appendChild(newRadio);
                        optionDiv.appendChild(newLabel);
                        optionsDiv.appendChild(optionDiv);
                    } else {
                        alert('Country not found. Please enter a valid country name.');
                    }
                } else {
                    alert('Country not found. Please enter a valid country name.');
                }
            })
            .catch(error => {
                console.error('Error fetching country flag:', error);
                alert('An error occurred while fetching the flag. Please try again.');
            });

        input.value = '';
    }
}

document.getElementById('countryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nationality = document.querySelector('input[name="nationality"]:checked');
    const taxation = document.querySelector('input[name="taxation"]:checked');
    if (nationality && taxation) {
        alert(`Nationality: ${nationality.value}, Taxation: ${taxation.value}`);
        // Reset radio buttons
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
    } else {
        alert('Please select both nationality and taxation country.');
    }
});