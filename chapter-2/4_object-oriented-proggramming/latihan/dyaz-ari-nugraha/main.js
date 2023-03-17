const breatheWithLungs = (Base) =>
  class extends Base {
    lungs() {
      return "Bernafas dengan paru-paru!";
    }
  };

const breatheWithGills = (Base) =>
  class extends Base {
    gils() {
      return "Bernafas dengan insang";
    }
  };

const eatFish = (Base) =>
  class extends Base {
    fish() {
      return "Hobi memakan ikan";
    }
  };

const eatMeat = (Base) =>
  class extends Base {
    meat() {
      return "Hobi memakan daging";
    }
  };

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    return `${this.name} berwarna ${this.color}`;
  }
}

class Kucing extends breatheWithLungs(eatFish(Animal)) {
  constructor(name, color) {
    super(name, color);
  }

  //TODO meng-override method run() dari kelas induk Animal
  run() {
    return `${super.run()} ${this.lungs()} ${this.fish()}`;
  }

  //TODO untuk me return value method lungs() dari helper function breatheWithLungs
  lungs() {
    return super.lungs();
  }

  //TODO untuk me return value method lungs() dari helper function eatRice
  fish() {
    return super.fish();
  }
}

class Anjing extends breatheWithLungs(eatMeat(Animal)) {
  constructor(name, color) {
    super(name, color);
  }

  //TODO meng-override method run() dari kelas induk Animal
  run() {
    return `${super.run()} ${this.lungs()} ${this.meat()}`;
  }

  //TODO untuk me return value method lungs() dari helper function breatheWithLungs
  lungs() {
    return super.lungs();
  }

  //TODO untuk me return value method lungs() dari helper function eatRice
  meat() {
    return super.meat();
  }
}

class Ikan extends breatheWithGills(Animal) {
  constructor(name, color) {
    super(name, color);
  }

  //TODO meng-override method run() dari kelas induk Animal
  run() {
    return `${super.run()} ${this.gils()}`;
  }

  //TODO untuk me-return value method gils() dari helper function breatheWithGills
  gils() {
    return super.gils();
  }
}

//TODO Pemanggilan penggunaan masing-masing kelas
const ikan = new Ikan("Ikan", "Emas");
console.log(ikan.run());
console.log();

const kucing = new Kucing("Kucing", "Oren");
console.log(kucing.run());
console.log();

const anjing = new Anjing("Anjing", "Cokelat");
console.log(anjing.run());
console.log();