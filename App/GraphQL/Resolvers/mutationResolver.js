const { convertToUpperCase, convertToLowerCase, clearText } = require("../Services/textServices");

const mutations = {
    convertToUpperCase: async (_, { text }) => {
        return convertToUpperCase(text);
    },
    convertToLowerCase: async (_, { text }) => {
        return convertToLowerCase(text);
    },
    clearText: async () => {
        return clearText();
    },
}

module.exports = mutations;