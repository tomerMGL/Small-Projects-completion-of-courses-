class Question {
    constructor(new_qest, numOfAns) {
        this._question = new_qest;
        this._answer = [];
        for (let i = 0; i < numOfAns; i++) {
            this._answer[i] = "";
        }
        this.addAns(numOfAns);
    }
    get question() {
        return this._question;
    }
    set question(v) {
        this._question = v;
    }
    get answer() {
        return this._answer;
    }
    set answer(v) {
        this._answer = v;
    }
    get trueAnswer() {
        return this._trueAnswer;
    }
    set trueAnswer(v) {
        this._trueAnswer = v;
    }
    addAns(numOfans) {
        for (let i = 0; i < numOfans; i++) {
            this._answer[i] = prompt(`Answer ${i + 1} : `);
        }
        let true_ans = Number(prompt(`Select your true answer : \n${this.numOfAnswer()}\n ${this.ans_privew()}`));
        this._trueAnswer = true_ans;
    }
    numOfAnswer() {
        let nums = [];
        for (let i = 0; i < this._answer.length; i++) {
            nums[i] = i + 1;
        }
        return nums;
    }
    ans_privew() {
        return this._answer;
    }
    ask() {
        let ques = Number(prompt(`Question : ${this.question} \n Answers : ${this.ans_privew()}`));
        if (this.trueAnswer == ques)
            return true;
        return false;
    }
}
//# sourceMappingURL=Question.js.map