

function handleInput(inputField) {
    const button = document.getElementById('callBackButton');

    if (inputField.value.length === 8) {
        button.disabled = false;
        button.textContent = 'Send';
        inputField.style.border = '1px solid #ccc';
    } else {
        button.disabled = true;
        button.textContent = 'Ring meg tilbake';
        inputField.style.border = '2px solid red';
    }
}

document.getElementById('callBackButton').addEventListener('click', function () {
    const inputField = document.querySelector('input[type="tel"]');
    if (inputField.value.length === 8) {
        const phoneNumber = inputField.value;
        const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
        const popup = document.getElementById('popup');
        popup.textContent = `Takk. Du vil snart blir oppringt på telefonnummer: ${formattedPhoneNumber}`;
        popup.style.display = 'block';

         // Ispraznite polje za unos broja
         inputField.value = '';

        // Promenite tekst na dugmetu na "OK"
        this.textContent = 'OK';

        // Onemogućite dugme kako se ne bi ponovno kliknulo
        this.disabled = true;
    }
});

function formatPhoneNumber(phoneNumber) {
  
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})/, '$1 $2 $3');
}

