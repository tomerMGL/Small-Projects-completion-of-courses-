import { Teacher } from "./teachers/teacher";

export class Class {
    constructor(id:string,nameOfClass:string,eductor:Teacher,numberOfStudents:number,addressInSchool:string){
        this.id=id;
        this.nameOfClass=nameOfClass;
        this.eductor=eductor;
        this.numberOfStudents=numberOfStudents;
        this.addressInSchool=addressInSchool;
    }

    
    private _id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
    }

    
    private _nameOfClass : string;
    public get nameOfClass() : string {
        return this._nameOfClass;
    }
    public set nameOfClass(v : string) {
        this._nameOfClass = v;
    }
    
    
    private _eductor : Teacher;
    public get eductor() : Teacher {
        return this._eductor;
    }
    public set eductor(v : Teacher) {
        this._eductor = v;
    }

    
    private _numberOfStudents : number;
    public get numberOfStudents() : number {
        return this._numberOfStudents;
    }
    public set numberOfStudents(v : number) {
        this._numberOfStudents = v;
    }
    
    
    private _addressInSchool : string;
    public get addressInSchool() : string {
        return this._addressInSchool;
    }
    public set addressInSchool(v : string) {
        this._addressInSchool = v;
    }
    
    
}
