class Hewan {
    constructor(data){
        if(this.constructor === Hewan){
            throw new Error ("tidak bisa melakukan instace pada kelas hewan")
        }
    this.gender = data.gender;
    this.habitat = data.habitat;
    }

    road(){
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
    shoot() {
      console.log(`${this.constructor.name} memakan daging`);
    }
  };

  class Sapi extends PublicServer(Human) {
    constructor(props) {
      super(props);
    }
    work() {
      super.work();
      super.save();
    }
  }