const form = document.querySelector('form');
const lengthInput = document.querySelector('#length');
const generateButton = document.querySelector('#generate');
const passwordInput = document.querySelector('#password');

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}:<>?';

generateButton.addEventListener('click', generatePassword);
var password = '';

function generatePassword() {
  const length = parseInt(lengthInput.value);

    password += getRandomChars(length, chars);

  password = shuffleString(password);
  password = password.substring(0, length);

  passwordInput.value = password;
}

function getRandomChars(length, chars) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function shuffleString(str) {
  let arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join('');
}
const copyButton = document.querySelector('#copyButton');
copyButton.addEventListener('click', copyPassword);
function copyPassword() {
    const passwordInput = document.querySelector('#password');
    passwordInput.select();
    document.execCommand('copy');
    // No need to clear the passwordInput.value here
}