// document.addEventListener('DOMContentLoaded', () => {
    // Элементы шифрования
    const encryptKeyInput = document.getElementById('encryptKey');
    const encryptTextInput = document.getElementById('encryptText');
    const encryptResultInput = document.getElementById('encryptResult');

    // Элементы расшифрования
    const decryptKeyInput = document.getElementById('decryptKey');
    const decryptTextInput = document.getElementById('decryptText');
    const decryptResultInput = document.getElementById('decryptResult');
    const withKeyModeBtn = document.getElementById('withKeyMode');
    const bruteForceModeBtn = document.getElementById('bruteForceMode');
    const keyInputSection = document.getElementById('keyInputSection');
    const bruteForceResults = document.getElementById('bruteForceResults');
    const bruteForceList = document.getElementById('bruteForceList');

    let isBruteForceMode = false;

    function getColumnOrder(key) {
        return Array.from(key)
            .map((char, index) => ({ char, index }))
            .sort((a, b) => a.char.localeCompare(b.char))
            .map(item => item.index);
    }

    function encrypt(text, key) {
        if (!text || !key) return '';
        
        const numColumns = key.length;
        const numRows = Math.ceil(text.length / numColumns);
        const paddedText = text.padEnd(numRows * numColumns, ' ');
        
        const table = [];
        for (let i = 0; i < numRows; i++) {
            table[i] = paddedText.slice(i * numColumns, (i + 1) * numColumns).split('');
        }
        
        const columnOrder = getColumnOrder(key);
        let result = '';
        for (let colIndex of columnOrder) {
            for (let row = 0; row < numRows; row++) {
                result += table[row][colIndex];
            }
        }
        
        return result.trim();
    }

    function decrypt(text, key) {
        if (!text || !key) return '';
        
        const numColumns = key.length;
        const numRows = Math.ceil(text.length / numColumns);
        const columnOrder = getColumnOrder(key);
        
        const table = Array(numRows).fill().map(() => Array(numColumns).fill(''));
        
        let textIndex = 0;
        for (let col of columnOrder) {
            for (let row = 0; row < numRows; row++) {
                if (textIndex < text.length) {
                    table[row][col] = text[textIndex++];
                }
            }
        }
        
        let result = '';
        for (let row = 0; row < numRows; row++) {
            result += table[row].join('');
        }
        
        return result.trim();
    }

    function generatePossibleKeys(length) {
        const result = [];
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        function generatePermutations(prefix, remaining) {
            if (prefix.length === length) {
                result.push(prefix);
                return;
            }
            for (let i = 0; i < remaining.length; i++) {
                const newPrefix = prefix + remaining[i];
                const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                generatePermutations(newPrefix, newRemaining);
            }
        }

        // Генерируем ключи длиной от 2 до length
        for (let i = 2; i <= length && i <= 5; i++) { // Ограничиваем максимальную длину ключа 5 символами
            generatePermutations('', chars.slice(0, i));
        }
        
        return result;
    }

    function bruteForceDecrypt(text) {
        const results = [];
        const possibleKeys = generatePossibleKeys(Math.min(5, text.length));
        
        for (const key of possibleKeys) {
            const decrypted = decrypt(text, key);
            // Проверяем, что расшифрованный текст содержит только печатные символы
            if (/^[\x20-\x7E]*$/.test(decrypted)) {
                results.push({ key, text: decrypted });
            }
        }
        
        return results;
    }

    function handleEncrypt() {
        const text = encryptTextInput.value;
        const key = encryptKeyInput.value;
        
        if (text && key) {
            encryptResultInput.value = encrypt(text, key);
        } else {
            encryptResultInput.value = '';
        }
    }

    function handleDecrypt() {
        const text = decryptTextInput.value;
        
        if (!text) {
            decryptResultInput.value = '';
            bruteForceResults.classList.add('hidden');
            return;
        }

        if (isBruteForceMode) {
            const results = bruteForceDecrypt(text);
            bruteForceList.innerHTML = '';
            if (results.length > 0) {
                results.forEach(result => {
                    const div = document.createElement('div');
                    div.textContent = `Ключ: ${result.key} | Текст: ${result.text}`;
                    div.addEventListener('click', () => {
                        decryptResultInput.value = result.text;
                    });
                    bruteForceList.appendChild(div);
                });
                bruteForceResults.classList.remove('hidden');
            } else {
                bruteForceResults.classList.add('hidden');
                decryptResultInput.value = 'Не удалось найти подходящий ключ';
            }
        } else {
            const key = decryptKeyInput.value;
            if (key) {
                decryptResultInput.value = decrypt(text, key);
            } else {
                decryptResultInput.value = '';
            }
            bruteForceResults.classList.add('hidden');
        }
    }

    function switchDecryptMode(mode) {
        isBruteForceMode = mode === 'bruteForce';
        withKeyModeBtn.classList.toggle('active', !isBruteForceMode);
        bruteForceModeBtn.classList.toggle('active', isBruteForceMode);
        keyInputSection.style.display = isBruteForceMode ? 'none' : 'block';
        handleDecrypt();
    }

    // Обработчики событий для шифрования
    encryptTextInput.addEventListener('input', handleEncrypt);
    encryptKeyInput.addEventListener('input', handleEncrypt);

    // Обработчики событий для расшифрования
    decryptTextInput.addEventListener('input', handleDecrypt);
    decryptKeyInput.addEventListener('input', handleDecrypt);
    withKeyModeBtn.addEventListener('click', () => switchDecryptMode('withKey'));
    bruteForceModeBtn.addEventListener('click', () => switchDecryptMode('bruteForce'));
// });
