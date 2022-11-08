function Human(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = () => console.log(`name: ${name}, age: ${age}`);
}

function Car(brand, model, year, licensePlate) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.licensePlate = licensePlate;
  this.owner = null;
  this.setOwner = function (human) {
    if (!(human instanceof Human)) return console.log("invalid human");
    if (human.age >= 18) {
      this.owner = human;
    } else {
      console.log("You are too young...");
    }
  };
  this.showInfo = () => {
    console.log(
      `brand: ${brand}, model: ${model}, year: ${year}, licensePlate: ${licensePlate}`
    );
    console.log("Owner:");
    if (this.owner) {
      this.owner.getInfo();
    } else {
      console.log("No owner...");
    }
  };
}

const stas = new Human("Stas", 29);
const leo = new Human("Leo", 9);
const ann = new Human("Ann", 34);

const bmw = new Car("BMW", "X6", 2018, 28812);
const kia = new Car("KIA", "D600", 2019, 553314);

bmw.setOwner(stas);
kia.setOwner(leo);
bmw.showInfo();
kia.showInfo();

kia.setOwner("Not a Human");
kia.setOwner(ann);
kia.showInfo();
