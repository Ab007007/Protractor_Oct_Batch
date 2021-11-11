class Car {
    start() {
        console.log("Car is in starting mode");
    }

    stop() {
        console.log("Car is stopped take out the keys");
    }

}

class Tyota extends Car
{
    brandName() {
        console.log("TYOTA");
    }
    manufacturingUnit() {
        console.log("Main unit is in Bangalore");
    }
}

class Innova extends Tyota
{
    carModel() {
        console.log("2021 model car");
    }
}

let myCar = new Innova()
myCar.carModel();
myCar.manufacturingUnit();
myCar.brandName();
myCar.start()
myCar.stop()