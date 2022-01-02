class Store{
    
    
    private _arr : TwoWheelVehicle[];
    public get arr() : TwoWheelVehicle[] {
        return this._arr;
    }
    public set arr(v : TwoWheelVehicle[]) {
        this._arr = v;
    }
    
    public checkForPolice():number{
      let numberOfBicycle:number =0;
        let bigest:number;


        for(let i=0;i<this._arr.length;i++)
            if(this._arr[i] instanceof Bicycle){
                bigest = (this._arr[i] as Bicycle).maxSpeed;
                console.log(i)
                break;
            }

        for(let i=0;i<this._arr.length;i++){
            if(this._arr[i] instanceof Bicycle)
                if((this._arr[i] as Bicycle).helpWheels == false )
                    if((this._arr[i] as Bicycle).maxSpeed  > bigest){
                        bigest = (this._arr[i] as Bicycle).maxSpeed
                        numberOfBicycle = 1;
                    }
                    else if ((this._arr[i] as Bicycle).maxSpeed  == bigest)
                        numberOfBicycle++;
        }
        console.log(this._arr[1].maxSpeed);
        return numberOfBicycle;
    }

}

