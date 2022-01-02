class Member{
    
    constructor(fullName:string, age:number,val:MyDate){
        this.fullName = fullName;
        this.age = age;
        this.validity = val;
    }


    private _fullName : string;
    public get fullName() : string {
        return this._fullName;
    }
    public set fullName(v : string) {
        this._fullName = v;
    }
    

    
    private _age : number;
    public get age() : number {
        return this._age;
    }
    public set age(v : number) {
        this._age = v;
    }
    
    
    private _validity : MyDate;
    public get validity() : MyDate {
        return this._validity;
    }
    public set validity(v : MyDate) {
        this._validity = v;
    }
    
}