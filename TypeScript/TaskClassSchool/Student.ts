class Student{

    constructor(name:string , idnumber:string){
        this.name = name;
        this.idNumber = idnumber;
    }

    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    
    private _idNumber : string;
    public get idNumber() : string {
        return this._idNumber;
    }
    public set idNumber(v : string) {
        this._idNumber = v;
    }
}