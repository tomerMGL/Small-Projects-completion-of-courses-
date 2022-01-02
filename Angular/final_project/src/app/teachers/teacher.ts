import { Class } from "../class";
import { Person } from "../person";

export class Teacher extends Person {
    constructor(id:string , fullName:string,age:number,address:string,image:string,profssion:string[],
        classArr:Class[],seniority:number,numberOfHourPerMonth:number,payPerHour:number){
        super(id,fullName,age,address,image);
            this.profssion=profssion;
            this.classArr=classArr;
            this.seniority=seniority;
            this.numberOfHourPerMonth=numberOfHourPerMonth;
            this.payPerHour=payPerHour;
    }

    
    private _profssion : string[];
    public get profssion() : string[] {
        return this._profssion;
    }
    public set profssion(v : string[]) {
        this._profssion = v;
    }
    
    
    private _classArr : Class[];
    public get classArr() : Class[] {
        return this._classArr;
    }
    public set classArr(v : Class[]) {
        this._classArr = v;
    }

    
    private _seniority : number;
    public get seniority() : number {
        return this._seniority;
    }
    public set seniority(v : number) {
        this._seniority = v;
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
