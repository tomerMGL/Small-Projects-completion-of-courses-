let school:School = new School(2,3);

 let threeS:Student[] = [
     new Student("tomer" , "123456"), new Student("anat" , "1234567"),new Student("asia" , "12345678")
    ];

 let sevenS:Student[] = [
    new Student("tomer" , "123456"), new Student("anat" , "1234567"),new Student("asia" , "12345678"),
    new Student("bob" , "321"), new Student("alice" , "456"),new Student("shontal" , "9855"),
    new Student("rami" , "75321")
 ];

 console.log(school.assignStudents(threeS));
 console.log(school.assignStudents(sevenS));
 

 console.log(school.seachById("123456")) ;