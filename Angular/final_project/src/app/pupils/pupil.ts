import { Class } from "../class";
import { Person } from "../person";

export class Pupil extends Person{

    constructor(id:string , fullName:string,age:number,address:string,image:string,classs:Class,grades:any){
        super(id , fullName,age,address,image);
        this.classs = classs;
        this.grades=grades;

    }

    
    private _classs : Class;
    public get classs() : Class {
        return this._classs;
    }
    public set classs(v : Class) {
        this._classs = v;
    }
    
    private _grades : Object[];
    public get grades() : Object[] {
        return this._grades;
    }
    public set grades(v : Object[]) {
        this._grades = v;        
    }
    
}
