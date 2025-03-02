const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const maxLength = 200;

textarea.addEventListener('input', function() {
    const currentLength = this.value.length;
    const remaining = maxLength - currentLength;

    charCount.textContent = remaining;

    if (currentLength >= maxLength) {
        textarea.style.borderColor = 'red';
        textarea.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.5)'
        if (currentLength > maxLength) {
            this.value = this.value.substring(0, maxLength);
        }
    } else {
        textarea.style.borderColor = '#007bff';
        textarea.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
    }
});