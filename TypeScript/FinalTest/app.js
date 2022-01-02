let comp = new Competition("ariel", 10);
let jumpers = [];
jumpers.push(new Jumper("bob", "123456", 220));
jumpers.push(new Jumper("alice", "25847652", 352));
jumpers.push(new Jumper("yossi", "3652487", 125));
jumpers.push(new Jumper("david", "251436", 420));
jumpers.push(new Jumper("haim", "95175346", 330));
jumpers.push(new Jumper("tomer", "25896347", 256));
jumpers.push(new Jumper("anat", "354128695", 365));
jumpers.push(new Jumper("asia", "568974254", 421));
for (let i of jumpers) {
    console.log(comp.addJumper(i));
}
comp.showAllJumpers();
console.log("The winner is : \n ------------------------");
comp.findWinner().show();
//# sourceMappingURL=app.js.map