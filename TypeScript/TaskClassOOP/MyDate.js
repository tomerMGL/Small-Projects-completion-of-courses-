class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get day() {
        return this._day;
    }
    set day(v) {
        if (v > 0 && v < 32)
            this._day = v;
    }
    get month() {
        return this._month;
    }
    set month(v) {
        if (v > 0 && v <= 12)
            this._month = v;
    }
    get year() {
        return this._year;
    }
    set year(v) {
        if (v > 2000)
            this._year = v;
    }
}
//# sourceMappingURL=MyDate.js.map