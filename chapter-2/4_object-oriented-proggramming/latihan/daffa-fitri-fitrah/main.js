class Hewan {
  constructor(props) {
    this.nama = props.nama;
    this.jenis = this.constructor.name;
  }

  introduce() {
    console.log(`Hewan ini adalah hewan ${this.nama}`);
  }

  bernafas() {
    console.log(`Jenis Hewan ${this.constructor.name}`);
  }
}

const ParuParu = (Base) =>
  class extends Base {
    udara() {
      console.log("Menghirup oksigen");
    }
  };

const Insang = (Base) =>
  class extends Base {
    air() {
      console.log("Memerlukan air");
    }
  };

const Trakea = (Base) =>
  class extends Base {
    trakea() {
      console.log("Bernafas menggunakan trakea");
    }
  };

// mamalia, reptile, ikan, serangga

class Mamalia extends ParuParu(Hewan) {
  constructor(props) {
    super(props);
  }

  bernafas() {
    super.bernafas();
    super.udara();
  }
}

class Reptile extends ParuParu(Hewan) {
  constructor(props) {
    super(props);
  }

  bernafas() {
    super.bernafas();
    super.udara();
  }

  makan() {
    console.log("Reptile suka makan daging");
  }
}

class Serangga extends Trakea(Hewan) {
  constructor(props) {
    super(props);
  }

  bernafas() {
    super.bernafas();
    super.trakea();
  }
}

class Ikan extends Insang(Hewan) {
  constructor(props) {
    super(props);
    this.alatGerak = props.alatGerak;
  }
  berkembangBiak() {
    console.log("Berkembang biak dengan cara bertelur");
  }

  bergerak() {
    console.log(`bergerak menggunakan ${this.alatGerak}`);
  }

  bernafas() {
    super.bernafas();
    super.air();
  }
}

let koi = new Ikan({
  nama: "koi",
  alatGerak: "sirip",
});

//console.log(koi);
koi.introduce();
koi.bergerak();
koi.bernafas();

console.log("------------------------");

let buaya = new Reptile({
  nama: "Buaya",
});

buaya.introduce();
buaya.bernafas();
buaya.makan();

console.log("------------------------");

let kupukupu = new Serangga({
  nama: "Kupu-Kupu",
});

kupukupu.introduce();
kupukupu.bernafas();

console.log("------------------------");

let kucing = new Mamalia({
  nama: "Kucing",
});

kucing.introduce();
kucing.bernafas();
