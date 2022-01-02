import { Person } from "../person";

export class Employee extends Person{

    constructor(id:string , fullName:string,age:number,address:string,image:string,workName:string,numberOfHourPerMonth:number,payPerHour:number){
        super(id,fullName,age,address,image);
        this.workName=workName;
        this.numberOfHourPerMonth=numberOfHourPerMonth;
        this.payPerHour=payPerHour;
    }


    
    private _workName : string;
    public get workName() : string {
        return this._workName;
    }
    public set workName(v : string) {
        this._workName = v;
    }
    
    
    private _numberOfHourPerMonth : number;
    public get numberOfHourPerMonth() : number {
        return this._numberOfHourPerMonth;
    }
    public set numberOfHourPerMonth(v : number) {
        this._numberOfHourPerMonth = v;
    }
    
    
    private _payPerHour : number;
    public get payPerHour() : number {
        return this._payPerHour;
    }
    public set payPerHour(v : number) {
        this._payPerHour = v;
    }
    
}
