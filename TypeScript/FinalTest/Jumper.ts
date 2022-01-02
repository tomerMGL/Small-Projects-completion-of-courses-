class Jumper{


    constructor(name:string , id:string , jump:number){

        this.name = name;
        this.id = id;
        this._jumpHeight = jump;
    }

    private _jumpHeight : number;
    public get jumpHeight() : number {
        return this._jumpHeight;
    }
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v.length > 1?v:null;
    }

    
    private _id : string;
    public get id() : string {
        return this._id;
    }
    public set id(v : string) {
        let flag:boolean=true;
        for(let i:number=0;i<v.length;i++){
            let num:number = parseInt(v[i]);
            if(isNaN(num)){
                console.log("Wrond ID!")
                flag=false;
                break;
            }
                
        }
        if(flag)
            this._id = v;
    }

    
    public show():void{
        console.log(`ID : ${this.id} | name : ${this.name} | jump height : ${this.jumpHeight} \n`)
    }

    public greaterThen(jumper:Jumper):boolean{
        if(this._jumpHeight > jumper._jumpHeight)
            return true;
        return false;
        
    }
    
    
}