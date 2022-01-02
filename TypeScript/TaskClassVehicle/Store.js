class Store {
    get arr() {
        return this._arr;
    }
    set arr(v) {
        this._arr = v;
    }
    checkForPolice() {
        let numberOfBicycle = 0;
        let bigest;
        for (let i = 0; i < this._arr.length; i++)
            if (this._arr[i] instanceof Bicycle) {
                bigest = this._arr[i].maxSpeed;
                console.log(i);
                break;
            }
        for (let i = 0; i < this._arr.length; i++) {
            if (this._arr[i] instanceof Bicycle)
                if (this._arr[i].helpWheels == false)
                    if (this._arr[i].maxSpeed > bigest) {
                        bigest = this._arr[i].maxSpeed;
                        numberOfBicycle = 1;
                    }
                    else if (this._arr[i].maxSpeed == bigest)
                        numberOfBicycle++;
        }
        console.log(this._arr[1].maxSpeed);
        return numberOfBicycle;
    }
}
//# sourceMappingURL=Store.js.map