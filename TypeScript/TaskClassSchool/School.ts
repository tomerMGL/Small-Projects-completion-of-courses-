class School{

    constructor(floor:number , classes:number) {
        
        this._allClasses = [];
        for(let i:number=0 ; i<floor ; i++){
            this._allClasses[i] = [];
            for(let c:number = 0; c<classes;c++)
                this._allClasses[i][c] = new ClassRoom(Math.floor(Math.random() * 5 +1));
        }

        
    }
    
    private _numOfUsedClasses : number;
    public get numOfUsedClasses() : number {
        return this._numOfUsedClasses;
    }
    public set numOfUsedClasses(v : number) {
        this._numOfUsedClasses = v;
    }
    

    
    private _allClasses : ClassRoom[][];
    public get allClasses() : ClassRoom[][] {
        return this._allClasses;
    }
    public set allClasses(v : ClassRoom[][]) {
        this._allClasses = v;
    }

    public assignStudents(s:Student[]):string{
        let numberOfStudents = s.length;
        for(let floor:number=0;floor<this._allClasses.length;floor++)
            for(let classs:number=0 ;classs < this._allClasses[floor].length ; classs++){

                if(this._allClasses[floor][classs].numOfStudent == 0 && this._allClasses[floor][classs].allStudents.length >=numberOfStudents){
                    this._allClasses[floor][classs].numOfStudent = numberOfStudents;
                    this._allClasses[floor][classs].allStudents = s;
                    return `Floor <${floor}> , Room <${classs}>`
                }
                
                }

        
        return `No available class`;
    }


    public seachById(id:string):ClassRoom{
        for(let floor of this._allClasses){
            for(let classs of floor){
                for( let s of classs.allStudents){
                     if(s.idNumber == id)
                        return classs;
                }
            }
        }
        return null;
    }
}