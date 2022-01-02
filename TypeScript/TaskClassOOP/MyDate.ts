class MyDate{
    
    constructor(day:number, month:number , year:number) {
        
        this.day = day;
        this.month = month;
        this.year = year;
    }
    private _day : number;
    public get day() : number {
        return this._day;
    }
    public set day(v : number) {
        if(v>0&&v<32)
            this._day = v;
    }
    

    
    private _month : number;
    public get month() : number {
        return this._month;
    }
    public set month(v : number) {
        if(v>0&&v<=12)
            this._month = v;
    }
    

    
    private _year : number;
    public get year() : number {
        return this._year;
    }
    public set year(v : number) {
        if(v>2000)
            this._year = v;
    }
    
}