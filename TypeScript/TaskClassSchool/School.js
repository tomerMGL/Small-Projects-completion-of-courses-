class School {
    constructor(floor, classes) {
        this._allClasses = [];
        for (let i = 0; i < floor; i++) {
            this._allClasses[i] = [];
            for (let c = 0; c < classes; c++)
                this._allClasses[i][c] = new ClassRoom(Math.floor(Math.random() * 5 + 1));
        }
    }
    get numOfUsedClasses() {
        return this._numOfUsedClasses;
    }
    set numOfUsedClasses(v) {
        this._numOfUsedClasses = v;
    }
    get allClasses() {
        return this._allClasses;
    }
    set allClasses(v) {
        this._allClasses = v;
    }
    assignStudents(s) {
        let numberOfStudents = s.length;
        for (let floor = 0; floor < this._allClasses.length; floor++)
            for (let classs = 0; classs < this._allClasses[floor].length; classs++) {
                if (this._allClasses[floor][classs].numOfStudent == 0 && this._allClasses[floor][classs].allStudents.length >= numberOfStudents) {
                    this._allClasses[floor][classs].numOfStudent = numberOfStudents;
                    this._allClasses[floor][classs].allStudents = s;
                    return `Floor <${floor}> , Room <${classs}>`;
                }
            }
        return `No available class`;
    }
    seachById(id) {
        for (let floor of this._allClasses) {
            for (let classs of floor) {
                for (let s of classs.allStudents) {
                    if (s.idNumber == id)
                        return classs;
                }
            }
        }
        return null;
    }
}
//# sourceMappingURL=School.js.map