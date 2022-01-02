export class Person {

    constructor(id:string , fullName:string,age:number,address:string,image:string){
        this.id=id;
        this.fullName=fullName;
        this.age=age;
        this.address=address;
        this.image=image;
    }
    

    private _id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        this._id = v;
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
    

    
    private _address : string;
    public get address() : string {
        return this._address;
    }
    public set address(v : string) {
        this._address = v;
    }
    
    
    private _image : string;
    public get image() : string {
        return this._image;
    }
    public set image(v : string) {
        this._image = v;
    }
    
}
