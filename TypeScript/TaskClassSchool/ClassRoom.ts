class ClassRoom{

    constructor(maxStudents:number){
        this.allStudents = [];
        for(let i:number = 0 ; i< maxStudents; i++)
            this.allStudents[i]=null;
        this.numOfStudent = 0;
    }
    
    
    

    private _numOfStudent : number;
    public get numOfStudent() : number {
        return this._numOfStudent;
    }
    public set numOfStudent(v : number) {
        this._numOfStudent = v;
    }

    
    private _allStudents : Student[];
    public get allStudents() : Student[] {
        return this._allStudents;
    }
    public set allStudents(v : Student[]) {
        this._allStudents = v;
    }
    
    
    
    
    public addStuden(s:Student):boolean{
        for (let x of this._allStudents){
            if(!(x instanceof Student)){
                x = s;
                this.numOfStudent += 1;
                return true;
        } 
        else 
            return false;
    }
    
}

    
}