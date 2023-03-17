// pokemon
class Pokemon {
  constructor(props) {
    if (this.constructor === Pokemon) {
      throw new TypeError("Error: Masukkan data ke subclass");
    }
    this.name = props.name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const helper_debuffer = (Base) =>
  class extends Base {
    constructor(props) {
      super(props);
      this.type = props.type;
    }
    detail() {
      console.log(`Pokemon ${this.name} Bertipe ${this.type}`);
    }

    debuff() {
      console.log("Memberikan Debuff ke Musuh!");
    }
  };

const helper_attacker = (Base) =>
  class extends Base {
    constructor(props) {
      super(props);
      this.type = props.type;
    }
    detail() {
      console.log(`Pokemon ${this.name} Bertipe ${this.type}`);
    }

    attack() {
      console.log("Menyerang Musuh!");
    }
  };
class AttackerPokemon extends helper_attacker(Pokemon) {
  constructor(props) {
    super(props);
  }
  attack() {
    super.detail();
    super.move();
    super.attack();
  }
}

class DebufferPokemon extends helper_attacker(helper_debuffer(Pokemon)) {
  constructor(props) {
    super(props);
  }
  debuff() {
    super.detail();
    super.move();
    super.attack();
    super.debuff();
  }
}

try {
  poke1 = new AttackerPokemon({ name: "Pikachu", type: "Electric" });
  poke1.attack();

  console.log("\n");

  poke2 = new DebufferPokemon({ name: "Gastly", type: ["Ghost", "Poison"] });
  poke2.debuff();

  console.log("\n");
  poke3 = new Pokemon({ name: "Archanine", type: "Fire" });
  poke3.walk();
} catch (err) {
  console.log(err.message);
}
