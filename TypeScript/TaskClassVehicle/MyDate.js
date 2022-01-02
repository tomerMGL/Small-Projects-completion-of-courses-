class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get year() {
        return this._year;
    }
    set year(v) {
        this._year = v;
    }
    get month() {
        return this._month;
    }
    set month(v) {
        this._month = (v > 0 && v <= 12) ? v : 0;
    }
    get day() {
        return this._day;
    }
    set day(v) {
        this._day = (v > 0 && v <= 31) ? v : 0;
    }
}
//# sourceMappingURL=MyDate.js.map