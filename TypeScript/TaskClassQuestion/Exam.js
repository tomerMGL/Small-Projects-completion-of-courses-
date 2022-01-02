class Exam {
    constructor(numberOfQuest) {
        this._question = [];
        for (let i = 0; i < numberOfQuest; i++) {
            this._question[i] = null;
        }
    }
    get question() {
        return this._question;
    }
    set question(v) {
        this._question = v;
    }
    addQuest(quest, numOfAns) {
        for (let i = 0; i < this._question.length; i++) {
            if (this._question[i] instanceof Question) {
                if (this._question[i].question == quest && this._question[i].answer.length == numOfAns)
                    return false;
            }
            else {
                this._question[i] = new Question(quest, numOfAns);
                return true;
            }
        }
    }
    ask() {
        let arr_ans = [];
        for (let i = 0; i < this._question.length; i++) {
            arr_ans[i] = this._question[i].ask();
        }
        let true_ans = 0;
        for (let i of arr_ans) {
            if (i)
                true_ans++;
        }
        return ((100 / this._question.length) * true_ans);
    }
    merge(new_ex) {
        let arr_new_exam;
        for (let i of new_ex._question) {
            for (let x of this._question) {
                if (i.question != x.question) {
                    arr_new_exam._question.push(i);
                    arr_new_exam._question.push(x);
                }
            }
        }
        return arr_new_exam;
    }
}
//# sourceMappingURL=Exam.js.map