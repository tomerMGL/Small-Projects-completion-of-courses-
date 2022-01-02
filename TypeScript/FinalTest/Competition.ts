class Competition{

    private placeName:string;
    private jumpers:Jumper[] = [];
    private maxParticipant:number;

    constructor(name:string , maxpart:number){
        this.placeName = name;
        this.maxParticipant = maxpart;

    }

    public addJumper(jumper:Jumper):boolean{
        if(this.jumpers.length<this.maxParticipant){
            this.jumpers.push(jumper);
            return true;
        }
        return false;
    }

    public showAllJumpers():void{

        for(let i of this.jumpers)
            i.show();
    }

    public findWinner():Jumper{
        let winner:Jumper = this.jumpers.length>0?this.jumpers[0]:null;

        if(winner){
            for(let i of this.jumpers){
                if(i.jumpHeight > winner.jumpHeight)
                    winner = i;

            }
        }

        return winner;
    }
}