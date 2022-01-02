class Question{

    constructor(new_qest:string, numOfAns:number){
        this._question = new_qest;

        this._answer = [];
        for(let i:number=0 ; i<numOfAns;i++){
            this._answer[i] = "";
        }

        this.addAns(numOfAns);

    }

    
    private _question : string;
    public get question() : string {
        return this._question;
    }
    public set question(v : string) {
        this._question = v;
    }
    
    
    private _answer : string[];
    public get answer() : string[] {
        return this._answer;
    }
    public set answer(v : string[]) {
        this._answer = v;
    }
    
    
    private _trueAnswer : number;
    public get trueAnswer() : number {
        return this._trueAnswer;
    }
    public set trueAnswer(v : number) {
        this._trueAnswer = v;
    }
    
    private addAns(numOfans:number):void{
        
        for(let i:number=0 ; i<numOfans;i++){
            this._answer[i] = prompt(`Answer ${i+1} : `)
        }

         let true_ans:number = Number(prompt(`Select your true answer : \n${this.numOfAnswer()}\n ${this.ans_privew()}`))
         this._trueAnswer = true_ans;

    }

    private numOfAnswer():number[]{
        let nums:number[] = [];
        for(let i:number = 0 ; i<this._answer.length ; i++){
            nums[i] = i+1;
        }
        return nums;
    }
    private ans_privew():string[]{
        return this._answer;
    }

    public ask():boolean{
        let ques:number = Number(prompt(`Question : ${this.question} \n Answers : ${this.ans_privew()}`))
        if(this.trueAnswer==ques)
            return true
        return false;
    }
}