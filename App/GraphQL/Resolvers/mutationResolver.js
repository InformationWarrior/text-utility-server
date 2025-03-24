const { convertToUpperCase, convertToLowerCase, checkPalindrome, clearText } = require("../Services/textServices");

const mutations = {
    convertToUpperCase: async (_, { text }) => {
        return convertToUpperCase(text);
    },
    convertToLowerCase: async (_, { text }) => {
        return convertToLowerCase(text);
    },
    checkPalindrome: async (_, { text }) => {
        return checkPalindrome(text);
    },
    clearText: async () => {
        return clearText();
    },
}

module.exports = mutations;