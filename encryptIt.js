
  const encryptButton = document.getElementById('encrypt-it');
  const resetButton = document.getElementById('reset');
  const inputText = document.getElementById('input-text');
  const resultArea = document.getElementById('resultArea');
  const cipherType = document.getElementById('cipher-type');
  const shiftAmount = document.getElementById('shift-amount');
  const textSize12 = document.querySelector('input[value="12pt"]');
  const textSize24 = document.querySelector('input[value="24pt"]');
  const allCaps = document.getElementById('all-caps');

  function encryptText() {
    const textToEncrypt = inputText.value;
    const selectedCipherType = cipherType.value;
    const selectedShiftAmount = parseInt(shiftAmount.value);
    const selectedTextSize = textSize12.checked ? '12pt' : '24pt';
    const shouldUppercase = allCaps.checked;

    let encryptedText = '';

    if (selectedCipherType === 'shift') {
      for (let i = 0; i < textToEncrypt.length; i++) {
        let asciiCode = textToEncrypt.charCodeAt(i);
        if (asciiCode >= 65 && asciiCode <= 90) {
          asciiCode = ((asciiCode - 65 + selectedShiftAmount) % 26) + 65;
        } else if (asciiCode >= 97 && asciiCode <= 122) {
          asciiCode = ((asciiCode - 97 + selectedShiftAmount) % 26) + 97;
        }
        encryptedText += String.fromCharCode(asciiCode);
      }
    } else if (selectedCipherType === 'random') {
      for (let i = 0; i < textToEncrypt.length; i++) {
        let asciiCode = textToEncrypt.charCodeAt(i);
        let randomShiftAmount = Math.floor(Math.random() * 26);
        if (asciiCode >= 65 && asciiCode <= 90) {
          asciiCode = ((asciiCode - 65 + randomShiftAmount) % 26) + 65;
        } else if (asciiCode >= 97 && asciiCode <= 122) {
          asciiCode = ((asciiCode - 97 + randomShiftAmount) % 26) + 97;
        }
        encryptedText += String.fromCharCode(asciiCode);
      }
    }

    if (shouldUppercase) {
      encryptedText = encryptedText.toUpperCase();
    } else {
      encryptedText = encryptedText.toLowerCase();
    }

    resultArea.style.fontSize = selectedTextSize;
    resultArea.innerHTML = encryptedText;
  }

  encryptButton.addEventListener('click', encryptText);

