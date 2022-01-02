class Bicycle extends TwoWheelVehicle {
    constructor(mydate, maxSpeed, color, model, helpWheels) {
        super(mydate, maxSpeed, color, model);
        this.helpWheels = helpWheels;
    }
    get helpWheels() {
        return this._helpWheels;
    }
    set helpWheels(v) {
        this._helpWheels = v;
    }
}
//# sourceMappingURL=Bicycle.js.map