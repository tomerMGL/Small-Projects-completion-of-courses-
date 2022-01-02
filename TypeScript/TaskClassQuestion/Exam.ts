class Exam{
    constructor(numberOfQuest:number){
        this._question = [];
        for(let i:number=0 ; i<numberOfQuest ; i++){
            this._question[i]=null;
        }
    }

    private _question : Question[];
    public get question() : Question[] {
        return this._question;
    }
    public set question(v : Question[]) {
        this._question = v;
    }

    public addQuest(quest:string , numOfAns:number):boolean{
        for(let i:number=0 ; i<this._question.length ;i++){
            if(this._question[i] instanceof Question){
                if (this._question[i].question==quest&&this._question[i].answer.length==numOfAns)
                    return false;
            }
            else{
                this._question[i] = new Question(quest,numOfAns);
                return true;
            }
                
            
        }
    }

    public ask():number{
        let arr_ans:Boolean[] =[];
        for(let i:number=0 ; i<this._question.length ;i++){
            arr_ans[i] = this._question[i].ask()
        }

        let true_ans:number = 0;
        for(let i of arr_ans){
            if(i)
                true_ans++;
        }

        return ((100/this._question.length)*true_ans)
    }

    public merge(new_ex:Exam):Exam{
        let arr_new_exam:Exam;
        for(let i of new_ex._question){
            for(let x of this._question){
                if(i.question != x.question){
                    arr_new_exam._question.push(i);
                    arr_new_exam._question.push(x);
                }
            }
                
        }
        return arr_new_exam;
    }
}