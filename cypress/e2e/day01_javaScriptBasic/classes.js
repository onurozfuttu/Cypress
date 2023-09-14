class Car{
    constructor(carname, model, year){
        this.carname=carname;
        this.model=model;
        this.year=year;
    
    }
    carAge(){ //function
        let date=new Date(); //comes from JS
        return date.getFullYear() - this.year; // to get car age

    }
}

var myCar = new Car("Jeep","Renegade",2023);
console.log(myCar.carname,myCar.model,myCar.year)
console.log("Car age is", myCar.carAge())