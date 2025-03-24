const { GraphQLError } = require("graphql");

async function* countdownTimer(duration) {
    console.log(`⏳ Timer started: ${duration} seconds`);

    let timeRemaining = duration;
    while (timeRemaining >= 0) {
        yield { timerRunning: { timeRemaining } };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        timeRemaining--;
    }

    console.log("✅ Timer ended!");
}

const startTimer = (timerDuration) => {
    if (timerDuration <= 0) {
        throw new GraphQLError("Timer duration must be greater than 0.");
    }
    return countdownTimer(timerDuration);
};

module.exports = { startTimer };
