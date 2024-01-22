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
