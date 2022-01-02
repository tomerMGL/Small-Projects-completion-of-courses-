let firstBicycle = new Bicycle(new MyDate(25,3,2013),200,"Red" , "BMX" , false);
let secondBicycle = new Bicycle(new MyDate(27,4,2013),200,"Blue" , "BMX" , false);

//secondBicycle.maxSpeed = 100;

let arrv:TwoWheelVehicle[]=[];
arrv[0] = firstBicycle;
arrv[1] = secondBicycle;
arrv[2]=new Bicycle(new MyDate(27,4,2013),200,"Blue" , "BMX" , false);
arrv[3]=new Bicycle(new MyDate(27,4,2013),100,"Blue" , "BMX" , false);
arrv[4]=new Bicycle(new MyDate(27,4,2013),200,"Blue" , "BMX" , false);


let store = new Store();
store.arr = arrv;
console.log(store.checkForPolice()) ;

