class Bicycle extends TwoWheelVehicle{
    constructor(mydate:MyDate , maxSpeed:number,color:string,model:string,helpWheels:boolean){
        super(mydate, maxSpeed,color,model);
        this.helpWheels = helpWheels;
    }



    private _helpWheels : boolean;
    public get helpWheels() : boolean {
        return this._helpWheels;
    }
    public set helpWheels(v : boolean) {
        this._helpWheels = v;
    }
    
}