const getMessage = async () => {
    const payload = {
        success: true,
        message: "GraphQL integration successful"
    };
    return payload;
}

module.exports = getMessage;