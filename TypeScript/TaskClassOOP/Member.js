class Member {
    constructor(fullName, age, val) {
        this.fullName = fullName;
        this.age = age;
        this.validity = val;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(v) {
        this._fullName = v;
    }
    get age() {
        return this._age;
    }
    set age(v) {
        this._age = v;
    }
    get validity() {
        return this._validity;
    }
    set validity(v) {
        this._validity = v;
    }
}
//# sourceMappingURL=Member.js.map