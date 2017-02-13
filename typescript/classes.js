var Car = (function () {
    function Car(licensePlate) {
        this.licensePlate = licensePlate;
    }
    Car.prototype.identify = function () {
        return "My plate is " + this.licensePlate;
    };
    return Car;
}());
