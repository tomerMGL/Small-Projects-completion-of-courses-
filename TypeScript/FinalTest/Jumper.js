class Jumper {
    constructor(name, id, jump) {
        this.name = name;
        this.id = id;
        this._jumpHeight = jump;
    }
    get jumpHeight() {
        return this._jumpHeight;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v.length > 1 ? v : null;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        let flag = true;
        for (let i = 0; i < v.length; i++) {
            let num = parseInt(v[i]);
            if (isNaN(num)) {
                console.log("Wrond ID!");
                flag = false;
                break;
            }
        }
        if (flag)
            this._id = v;
    }
    show() {
        console.log(`ID : ${this.id} | name : ${this.name} | jump height : ${this.jumpHeight} \n`);
    }
    greaterThen(jumper) {
        if (this._jumpHeight > jumper._jumpHeight)
            return true;
        return false;
    }
}
//# sourceMappingURL=Jumper.js.map