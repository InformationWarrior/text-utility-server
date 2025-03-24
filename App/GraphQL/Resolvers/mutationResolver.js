const { convertToUpperCase, convertToLowerCase } = require("../Services/textServices");

const mutations = {
    convertToUpperCase: async (_, { text }) => {
        return convertToUpperCase(text);
    },
    convertToLowerCase: async (_, { text }) => {
        return convertToLowerCase(text);
    }
}

module.exports = mutations;