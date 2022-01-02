class ClassRoom {
    constructor(maxStudents) {
        this.allStudents = [];
        for (let i = 0; i < maxStudents; i++)
            this.allStudents[i] = null;
        this.numOfStudent = 0;
    }
    get numOfStudent() {
        return this._numOfStudent;
    }
    set numOfStudent(v) {
        this._numOfStudent = v;
    }
    get allStudents() {
        return this._allStudents;
    }
    set allStudents(v) {
        this._allStudents = v;
    }
    addStuden(s) {
        for (let x of this._allStudents) {
            if (!(x instanceof Student)) {
                x = s;
                this.numOfStudent += 1;
                return true;
            }
            else
                return false;
        }
    }
}
//# sourceMappingURL=ClassRoom.js.map