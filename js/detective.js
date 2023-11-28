class Detective {
    solve(crime) {
        return crime.suspects.find((suspect) => {
            return (
                suspect.location === crime.victim.location &&
                suspect.weapon === crime.victim.weapon
            );
        });
    }
}

module.exports = Detective;
