let ex = new Exam(3);
ex.addQuest("what is my name : ", 3);
ex.addQuest("what is my last name : ", 2);
ex.addQuest("what is my age : ", 2);
let ex1 = new Exam(3);
ex1.addQuest("what is my name : ", 3);
ex1.addQuest("what is my last name : ", 2);
ex1.addQuest("what is my age : ", 2);
let new_ex = ex.merge(ex1);
new_ex.ask();
//# sourceMappingURL=app.js.map