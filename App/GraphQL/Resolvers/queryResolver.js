const getMessage = require("../Services/getMessage");

const queries = {
    getMessage: async () => {
        return await getMessage();
    }
};

module.exports = queries;