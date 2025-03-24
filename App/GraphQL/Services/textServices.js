const convertToUpperCase = async (text) => {
    const payload = {
        text: text.toUpperCase()
    }
    return payload;
}
const convertToLowerCase = async (text) => {
    const payload = {
        text: text.toLowerCase()
    }
    return payload;
}
const clearText = async () => {
    const payload = {
        text: ""
    }
    return payload;
}

module.exports = { convertToUpperCase, convertToLowerCase, clearText };