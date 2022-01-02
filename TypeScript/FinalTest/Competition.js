class Competition {
    constructor(name, maxpart) {
        this.jumpers = [];
        this.placeName = name;
        this.maxParticipant = maxpart;
    }
    addJumper(jumper) {
        if (this.jumpers.length < this.maxParticipant) {
            this.jumpers.push(jumper);
            return true;
        }
        return false;
    }
    showAllJumpers() {
        for (let i of this.jumpers)
            i.show();
    }
    findWinner() {
        let winner = this.jumpers.length > 0 ? this.jumpers[0] : null;
        if (winner) {
            for (let i of this.jumpers) {
                if (i.jumpHeight > winner.jumpHeight)
                    winner = i;
            }
        }
        return winner;
    }
}
//# sourceMappingURL=Competition.js.map