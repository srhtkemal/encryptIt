
const { 
  value: inputTextValue 
} = document.getElementById('input-text');
const { 
  value: cipherTypeValue 
} = document.getElementById('cipher-type');
const { 
  value: shiftAmountValue 
} = document.getElementById('shift-amount');
const { 
  checked: textSize12Checked 
} = document.querySelector('input[value="12pt"]');
const { 
  checked: textSize24Checked 
} = document.querySelector('input[value="24pt"]');
const { 
  checked: allCapsChecked 
} = document.getElementById('all-caps');

const encryptButton = document.getElementById('encrypt-it');
const resetButton = document.getElementById('reset');
const resultArea = document.getElementById('result');

const encryptText = () => {
  const textToEncrypt = inputTextValue;
  const selectedCipherType = cipherTypeValue;
  const selectedShiftAmount = parseInt(shiftAmountValue);
  const selectedTextSize = textSize12Checked ? '12pt' : '24pt';
  const shouldUppercase = allCapsChecked;
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
};

encryptButton.addEventListener('click', encryptText);
