//superclass
class vehicle {
    constructor(props) {
      this.name = props.name;
      this.type = props.type;
      this.warna = props.warna;
    }
    introduce() {
      console.log(`This is ${this.name}`);
    }
  }
