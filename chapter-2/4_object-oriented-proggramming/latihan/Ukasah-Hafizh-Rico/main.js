//superclass
class vehicle {
  constructor(props) {
    this.name = props.name;
    this.type = props.type;
    this.color = props.color;
    // strict
    if (this.constructor === vehicle) {
      throw new TypeError(
        "Abstract class 'vehicle' cannot be instantiated directly."
      );
    }
  }

  // base method
  run() {
    return `${this.type} vehicle ${this.name} with ${this.color} color is ready!`;
  }
}

// helper mixin
const dieselPower = (Base) =>
  class extends Base {
    diesel() {
      return 'Mobil dengan daya mesin 125 kW.';
    }
  };

const electricityPower = (Base) =>
  class extends Base {
    electricity() {
      return 'Mengendarai mobil listrik dengan tenang dan ramah lingkungan.';
    }
  };

const gasPower = (Base) =>
  class extends Base {
    gas() {
      return 'Merasakan akselerasi yang responsif pada mobil gas alam.';
    }
  };

// sub class
class electrictyCar extends electricityPower(vehicle) {
  constructor(props) {
    super(props);
  }

  // method
  run() {
    console.log(super.run());
    console.log(super.electricity());
  }
}

class dieselCar extends dieselPower(vehicle) {
  constructor(props) {
    super(props);
  }

  run() {
    console.log(super.run());
    console.log(super.diesel());
  }
}
class gasCar extends gasPower(vehicle) {
  constructor(props) {
    super(props);
  }

  // method
  run() {
    console.log(super.run());
    console.log(super.gas());
  }
}

class hybridcar extends gasPower(electricityPower(vehicle)) {
  constructor(props) {
    super(props);
  }

  // method
  run() {
    console.log(super.run());
    console.log(super.gas());
    console.log(super.electricity());
  }
}

//   just test
// const wuling = new hybridcar({
//   name: 'wuling',
//   type: 'car',
//   color: 'blue sky',
// });

// wuling.run();

// const mitsu = new dieselCar({
//   name: 'Triton',
//   type: 'car',
//   color: 'black',
// });

// mitsu.run();
