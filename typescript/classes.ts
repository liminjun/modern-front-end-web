class Car{
    constructor(licensePlate:string){
        this.licensePlate=licensePlate;
    }
    licensePlate:string

    identify():string{
        return "My plate is "+this.licensePlate;
    }
}
var c=new Car('blah')
console.log(c.licensePlate);
