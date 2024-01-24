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

    $('#resultArea').html(resultText);

    alert('A form sikeresen leadva!');
}


function validateForm() {
    // Töröljük az előző hibaüzeneteket és keretszínezéseket
    clearErrors();

    // Ellenőrzés, hogy legalább egy radio button ki van-e választva
    var radios = document.querySelectorAll('.radio-group input[type="radio"]');
    var isAtLeastOneRadioChecked = Array.from(radios).some(radio => radio.checked);

    if (!isAtLeastOneRadioChecked) {
        highlightError('.radio-group', 'Legalább egy opció ki kell legyen választva!');
        return false;
    }

    // Ellenőrzés, hogy legalább egy checkbox ki van-e választva
    var checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    var isAtLeastOneCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isAtLeastOneCheckboxChecked) {
        highlightError('.checkbox-group', 'Legalább egy opció ki kell legyen választva!');
        return false;
    }

    return true;
}

function highlightError(selector, message) {
    // Hibaüzenet megjelenítése és keretszínezése
    var container = document.querySelector(selector);
    container.insertAdjacentHTML('beforeend', `<p class="error">${message}</p>`);
    container.style.borderColor = 'red';
}

function clearErrors() {
    // Az összes hibaüzenet és keretszínezés eltávolítása
    var errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());

    var containers = document.querySelectorAll('.checkbox-group, .radio-group');
    containers.forEach(container => container.style.borderColor = '');
}
