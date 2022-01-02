class TwoWheelVehicle extends MyDate {
    constructor(mydate, maxSpeed, color, model) {
        super(mydate.year, mydate.month, mydate.day);
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.model = model;
        this.manDate = mydate;
    }
    get manDate() {
        return this._manDate;
    }
    set manDate(v) {
        this._manDate = v;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(v) {
        this._maxSpeed = v;
    }
    get color() {
        return this._color;
    }
    set color(v) {
        this._color = v;
    }
    get model() {
        return this._model;
    }
    set model(v) {
        this._model = v;
    }
}
//# sourceMappingURL=TwoWheelVehicle.js.map