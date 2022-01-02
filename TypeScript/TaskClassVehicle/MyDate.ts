class MyDate{

constructor(day:number,month:number,year:number){
    this.day = day;
    this.month=month;
    this.year=year;

}
    
    private _year : number;
    public get year() : number {
        return this._year;
    }
    public set year(v : number) {
        this._year = v;
    }
    

    
    private _month : number;
    public get month() : number {
        return this._month;
    }
    public set month(v : number) {
        this._month = (v>0 && v<=12)?v:0;
    }

    
    private _day : number;
    public get day() : number {
        return this._day;
    }
    public set day(v : number) {
        this._day =(v>0 && v<=31)?v:0;
    }
    
    
}