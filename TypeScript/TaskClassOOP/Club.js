class Club {
    constructor(name, size) {
        this.nameOfClub = name;
        this._friendList = [];
        for (let i = 0; i < size; i++) {
            this._friendList[i] = new Member("", 0, new MyDate(1, 1, 2000));
        }
    }
    get nameOfClub() {
        return this._nameOfClub;
    }
    set nameOfClub(v) {
        this._nameOfClub = v;
    }
    get friendList() {
        return this._friendList;
    }
    set friendList(v) {
        this._friendList = v;
    }
    add(name, age) {
        let date = new Date();
        for (let i = 0; i < this._friendList.length; i++) {
            if (this._friendList[i].fullName == name && this._friendList[i].age == age)
                return false;
        }
        for (let i = 0; i < this._friendList.length; i++) {
            if (this._friendList[i].fullName == "" && this._friendList[i].age == 0) {
                this._friendList[i].fullName = name;
                this._friendList[i].age = age;
                this._friendList[i].validity = new MyDate(date.getDay(), date.getMonth(), date.getFullYear() + 1);
                return true;
            }
        }
    }
    renew(date) {
        let arr_members;
        for (let i = 0; i < this._friendList.length; i++) {
            if (this._friendList[i].validity.year < date.year) {
                arr_members.push(this._friendList[i]);
            }
            else if (this._friendList[i].validity.year == date.year && this._friendList[i].validity.month < date.month) {
                arr_members.push(this._friendList[i]);
            }
            else if (this._friendList[i].validity.year == date.year && this._friendList[i].validity.month == date.month && this._friendList[i].validity.day < date.day) {
                arr_members.push(this._friendList[i]);
            }
        }
        return arr_members;
    }
    split(age) {
        let new_member;
        for (let i; i < this._friendList.length; i++) {
            if (this._friendList[i].age < age) {
                new_member.push(this._friendList[i]);
                this._friendList.splice(i);
            }
        }
        let new_club = new Club(`${this.nameOfClub}_new`, new_member.length);
        new_club._friendList = new_member;
        return new_club;
    }
    print() {
        console.log(`club name : ${this.nameOfClub} \n ------------------Members------------------`);
        for (let i = 0; i < this._friendList.length; i++) {
            console.log(`name : ${this._friendList[i].fullName} age ${this._friendList[i].age}`);
        }
    }
}
//# sourceMappingURL=Club.js.map