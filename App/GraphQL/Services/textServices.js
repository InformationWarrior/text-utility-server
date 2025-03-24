const convertToUpperCase = async (text) => {
    const payload = {
        text: text.toUpperCase()
    }
    return payload;
};

const convertToLowerCase = async (text) => {
    const payload = {
        text: text.toLowerCase()
    }
    return payload;
};

const checkPalindrome = async (text) => {
    let palindromeText;

    if (text) {
        const cleanedStr = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        palindromeText = cleanedStr === reversedStr ? `Text is Palindrome` : `Text is not Palindrome`;
    }
    const payload = {
        text: palindromeText
    }
    return payload;
};

const clearText = async () => {
    const payload = {
        text: ""
    }
    return payload;
};

module.exports = { convertToUpperCase, convertToLowerCase, checkPalindrome, clearText };