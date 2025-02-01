const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');

// Characters and symbols that can be used
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

// Generate individual characters
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate password
function generatePassword() {
    const len = lengthEl.value;
    let password = "";

    if (uppercaseEl.checked) {
        password += getUppercase();
    }

    if (lowercaseEl.checked) {
        password += getLowercase();
    }

    if (numbersEl.checked) {
        password += getNumber();
    }

    if (symbolsEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    passwordEl.value = password;
}

// Random character generator
function generateX() {
    const xs = [];
    if (uppercaseEl.checked) {
        xs.push(getUppercase());
    }
    if (lowercaseEl.checked) {
        xs.push(getLowercase());
    }
    if (numbersEl.checked) {
        xs.push(getNumber());
    }
    if (symbolsEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

// Copy password to clipboard
function copyPassword() {
    const textarea = document.createElement('textarea');
    const password = passwordEl.value;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password has been copied!');
}

// Event listeners
generateEl.addEventListener('click', generatePassword);
copyEl.addEventListener('click', copyPassword); 