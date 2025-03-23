const getMessage = async () => {
    const payload = {
        success: true,
        message: "GraphQL integration successful"
    };

    console.log({ request: true, payload: payload })
    return payload;
}

module.exports = getMessage;