function submitForm() {
    // Az űrlap adatainak gyűjtése
    var formData = {
        textInput: $('#textInput').val(),
        textareaInput: $('#textareaInput').val(),
        checkboxInput1: $('#checkboxInput1').prop('checked'),
        checkboxInput2: $('#checkboxInput2').prop('checked'),
        radioInput: $('input[name="radioInput"]:checked').val(),
        colorInput: $('#colorInput').val(),
        dateInput: $('#dateInput').val()
    };

    // Eredmény megjelenítése
    var resultText = `<p>Szöveges mező (egy soros): ${formData.textInput}</p>`;
    resultText += `<p>Szöveges mező (több soros): ${formData.textareaInput}</p>`;
    resultText += `<p>Checkbox 1: ${formData.checkboxInput1 ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Checkbox 2: ${formData.checkboxInput2 ? 'kijelölve' : 'nincs kijelölve'}</p>`;
    resultText += `<p>Radio button: ${formData.radioInput}</p>`;
    resultText += `<p>Színválasztó: ${formData.colorInput}</p>`;
    resultText += `<p>Dátumválasztó: ${formData.dateInput}</p>`;

    $('#resultArea').html(resultText);
}

function validateForm() {
    // Ellenőrzés, hogy legalább egy checkbox ki van-e választva
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    // Ha nincs kiemelt checkbox, akkor kiírjuk a hibaüzenetet
    if (!isChecked) {
        alert('Legalább egy opció ki kell legyen választva!');
        return false; // A form nem küldhető el
    }
    
    var radios = document.querySelectorAll('input[type="radio"]');
    var isChoosen = Array.from(radios).some(radio => radio.checked);
    
    // Ha nincs kiemelt radiobutton, akkor kiírjuk a hibaüzenetet
    if (!isChoosen) {
        alert('Ki kell legyen választva!');
        return false; // A form nem küldhető el
    }

    var textInput = document.getElementById('textInput');
    var isTextInputValid = textInput.value.trim() !== ''; // Ellenőrzés, hogy a mező nincs-e üre

    if (!isTextInputValid) {
        textInput.style.borderColor = 'red'; // Vörös keret, ha a mező nincs kitöltve
    } else {
        textInput.style.borderColor = ''; // Visszaállítjuk az eredeti keretszínt
    }

    // Egyéb validációk vagy logika

    return isChecked && isTextInputValid && isChoosen;

}
    
