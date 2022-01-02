class Club{

    constructor(name:string , size:number){
        this.nameOfClub = name;
        this._friendList = [];

        for(let i:number=0;i<size;i++){
            this._friendList[i] = new Member("",0,new MyDate(1,1,2000));
        }
    }
    
    private _nameOfClub : string;
    public get nameOfClub() : string {
        return this._nameOfClub;
    }
    public set nameOfClub(v : string) {
        this._nameOfClub = v;
    }
    
    
    private _friendList : Member[];
    public get friendList() : Member[] {
        return this._friendList;
    }
    public set friendList(v : Member[]) {
        this._friendList = v;
    }
    

    public add(name:string , age:number):boolean{
        let date = new Date();

        for(let i:number=0;i<this._friendList.length;i++){
            if(this._friendList[i].fullName==name&&this._friendList[i].age==age)
                return false;

        
    }
        for(let i:number=0;i<this._friendList.length;i++){
            if(this._friendList[i].fullName==""&&this._friendList[i].age==0){
                this._friendList[i].fullName=name;
                this._friendList[i].age=age;
                this._friendList[i].validity = new MyDate(date.getDay(), date.getMonth(),date.getFullYear()+1);
                return true;
            }

        }
    }


    public renew(date:MyDate):Member[]{

        let arr_members:Member[];

        for(let i:number=0;i<this._friendList.length;i++){
            if(this._friendList[i].validity.year < date.year){
                arr_members.push(this._friendList[i]);
            }
            else if(this._friendList[i].validity.year==date.year&&this._friendList[i].validity.month<date.month){
                arr_members.push(this._friendList[i])
            }

            else if(this._friendList[i].validity.year == date.year && this._friendList[i].validity.month==date.month &&this._friendList[i].validity.day<date.day){
                arr_members.push(this._friendList[i])
            }
               

        }

        return arr_members;
    }


    public split(age:number):Club{

        let new_member:Member[];

        for(let i:number ; i<this._friendList.length;i++){
            if(this._friendList[i].age<age){
                new_member.push(this._friendList[i]);
                this._friendList.splice(i);
            }
        }
        let new_club:Club = new Club(`${this.nameOfClub}_new`,new_member.length);
        new_club._friendList = new_member;

        return new_club;

    }

    public print():void{
        console.log(`club name : ${this.nameOfClub} \n ------------------Members------------------`)

        for(let i= 0 ; i<this._friendList.length; i++){
            console.log(`name : ${this._friendList[i].fullName} age ${this._friendList[i].age}`);
        }
    }
}