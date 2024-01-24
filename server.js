function submitForm() {
    // Az űrlap adatainak gyűjtése
    var formData = {
        italNeve: $('#textInput1').val(),
        hidegMeleg: $('input[name="hidegmeleg"]:checked').val(),
        csokis: $('#checkboxInput1').prop('checked'),
        gyumolcsos: $('#checkboxInput2').prop('checked'),
        magvas: $('#checkboxInput3').prop('checked'),
        alkoholos: $('#checkboxInput4').prop('checked'),
        karamellas: $('#checkboxInput5').prop('checked'),
        kokuszos: $('#checkboxInput6').prop('checked'),
        szinvilag: $('#colorInput').val(),
        egyebLeiras: $('#textareaInput').val(),
        jelentkezoNeve: $('#textInput2').val(),
        szuletesiIdo: $('#dateInput').val()
    };

    // Eredmény megjelenítése
    var resultText = `<p>Ital neve: ${formData.italNeve}</p>`;
    resultText += `<p>Hőmérséklet: ${formData.hidegMeleg}</p>`;
    resultText += `<p>Csokis: ${formData.csokis ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Gyümölcsös: ${formData.gyumolcsos ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Magvas: ${formData.magvas ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Alkoholos: ${formData.alkoholos ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Karamellás: ${formData.karamellas ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Kókuszos: ${formData.kokuszos ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Színvilág: ${formData.szinvilag}</p>`;
    resultText += `<p>Egyéb leírás: ${formData.egyebLeiras}</p>`;
    resultText += `<p>Jelentkező neve: ${formData.jelentkezoNeve}</p>`;
    resultText += `<p>Születési idő: ${formData.szuletesiIdo}</p>`;

    //$('#resultArea').html(resultText);

    alert('A form sikeresen leadva!');
}


function validateForm() {
    // Töröljük az előző hibaüzeneteket
    clearErrorMessages();

    // Ellenőrzés, hogy legalább egy checkbox ki van-e választva
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    // Ha nincs kiemelt checkbox, akkor hibaüzenet
    if (!isChecked) {
        checkboxes.forEach(function(checkbox) {
            checkbox.style.borderColor = 'red';
        });
        displayErrorMessage('Legalább egy opció ki kell legyen választva!');
        return false;
    }

    var radios = document.querySelectorAll('input[type="radio"]');
    var isChoosen = Array.from(radios).some(radio => radio.checked);

    // Ha nincs kiemelt radiobutton, akkor hibaüzenet
    if (!isChoosen) {
        radios.forEach(function(radio) {
            radio.style.borderColor = 'red';
        });
        displayErrorMessage('Legalább egy opció ki kell legyen választva!');
        return false;
    }

    var textInput = document.getElementById('textInput');
    var isTextInputValid = textInput.value.trim() !== '';

    // Ellenőrzés, hogy a szöveges mező nincs-e üres
    if (!isTextInputValid) {
        textInput.style.borderColor = 'red';
        displayErrorMessage('A szöveges mező kitöltése kötelező!');
        return false;
    } else {
        textInput.style.borderColor = ''; // Visszaállítjuk az eredeti keretszínt
    }

    // Egyéb validációk vagy logika

    return isChecked && isTextInputValid && isChoosen;
}

function displayErrorMessage(message) {
    // Hibaüzenet megjelenítése egy div elemben
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
}

function clearErrorMessages() {
    // Az összes hibaüzenet eltávolítása
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => errorMessage.remove());
}

    
