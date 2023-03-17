class Hewan {
    constructor(data){
        if(this.constructor === Hewan){
            throw new Error ("tidak bisa melakukan instace pada kelas hewan")
        }
    this.gender = data.gender;
    this.habitat = data.habitat;
    }

    introduce(){
        console.log(`ini adalah ${this.constructor.name}`)
    }

}

const Mamalia = (Base) =>
  class extends Base {
    kategori() {
      console.log(`${this.constructor.name} adalah hewan mamalia`);
    }
  };

const karnivora = (Base) =>
  class extends Base {
    type() {
      console.log(`${this.constructor.name} memakan daging`);
    }
  };

  const Terbang = (Base) =>
  class extends Base {
    fly() {
      console.log(`${this.constructor.name} bisa terbang`);
    }
  };

  class Sapi extends Mamalia(Hewan) {
    constructor(data) {
      super(data);
    }
    start() {
      super.introduce();
      super.kategori();
    }
  }

  class Harimau extends Mamalia(karnivora(Hewan)){
    constructor(data) {
        super(data);
      }

      start() {
        super.introduce();
        super.kategori();
        super.type();
      }
    }

    class Kelelawar extends Mamalia(karnivora(Terbang(Hewan))){
        constructor(data) {
            super(data);
          }
    
          start() {
            super.introduce();
            super.kategori();
            super.type();
            super.fly();
    }
}

let sapiFerdie = new Sapi({
    gender : "laki-laki",
    habitat: "darat"
})

sapiFerdie.start();

let KelelawarPiter = new Kelelawar({
    gender : "perempuan",
    habitat: "udara"
})

console.log("")
KelelawarPiter.start();
    