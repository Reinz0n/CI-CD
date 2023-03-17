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

  //helper dieselPower
    const dieselPower = (Base) =>
    class extends Base {
      power() {
        return "Mobil dengan daya mesin 125 kW.";
     }
    };

  
  // helper mixin
  const electricityPower = (Base) =>
    class extends Base {
      electricity() {
        return 'Mengendarai mobil listrik dengan tenang dan ramah lingkungan.';
      }
    };
  
  // temp
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

   //SubKelas dieselCar
   class dieselCar extends dieselPower(vehicle) {
    constructor(props) {
        super(props);
        this.volumeSilinder = volumeSilinder;
        this.kecepatanPutaran = kecepatanPutaran;
      }

    run() {
        console.log(super.run());
        console.log(super.dieselPower());
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

  class Mitsu extends gasPower(dieselPower((vehicle))) {
    constructor(props) {
      super(props);
    }
  
    // method
    run() {
      console.log(super.run());
      console.log(super.gas());
      console.log(super.power());
    }
  }

 
  
  
//   just test
//   const wuling = new hybridcar({
//     name: 'wuling',
//     type: 'car',
//     color: 'blue sky',
//   });
  
//   wuling.run();

// //  Test 2
//   const mitsu = new Mitsu({
//     name: 'Triton',
//     type: 'car',
//     color: 'black',
//   });
  
// mitsu.run();