class TwoWheelVehicle extends MyDate{

    constructor(mydate:MyDate ,maxSpeed:number,color:string,model:string){
        super(mydate.year,mydate.month,mydate.day);
        this.maxSpeed = maxSpeed;
        this.color=color;
        this.model=model;
        this.manDate=mydate;

    }


    
    private _manDate : MyDate;
    public get manDate() : MyDate {
        return this._manDate;
    }
    public set manDate(v : MyDate) {
        this._manDate = v;
    }
    
    
    private _maxSpeed : number;
    public get maxSpeed() : number {
        return this._maxSpeed;
    }
    public set maxSpeed(v : number) {
        this._maxSpeed = v;
    }
    

    
    private _color : string;
    public get color() : string {
        return this._color;
    }
    public set color(v : string) {
        this._color = v;
    }
    
    
    private _model : string;
    public get model() : string {
        return this._model;
    }
    public set model(v : string) {
        this._model = v;
    }
    
}