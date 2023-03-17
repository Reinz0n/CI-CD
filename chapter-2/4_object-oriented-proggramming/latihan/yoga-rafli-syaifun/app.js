// pokemon
class Pokemon {
  constructor(nama){
    this.nama = nama
  }

  move(){
    console.log(`${this.nama} is moving`)
  }
}

const helper_debuffer = (Base) => class extends Base {
    debuff(){
        console.log(`suka membantu pokemon`)
    }
}

class helper extends helper_debuffer(Pokemon){
    constructor(props){
        super(props);
    }

    detail(){
        super.debuff();
        super.move();
    }
}




// Helper Debuffer
// Method
//   - Debuff

