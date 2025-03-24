const { startTimer } = require("../Services/timerService");

const subscriptions = {
    timerRunning: {
        subscribe: () => {
            const timerDuration = 30 * 60;
            return startTimer(timerDuration);
        }
    }
};

module.exports = subscriptions;
