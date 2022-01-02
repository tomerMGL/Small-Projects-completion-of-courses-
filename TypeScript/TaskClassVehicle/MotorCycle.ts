class MotorCycle extends TwoWheelVehicle{
    


    
    private _licenseNum : string;
    public get licenseNum() : string {
        return this._licenseNum;
    }
    public set licenseNum(v : string) {
        this._licenseNum = v;
    }
    
}