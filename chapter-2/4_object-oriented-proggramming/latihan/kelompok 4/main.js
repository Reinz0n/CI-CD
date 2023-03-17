
const gamingCapability = (Base) => class extends Base {
    gaming() {
        console.log('Playing Apex Legend at 120fps!');
    }
};

const editingCapability = (Base) => class extends Base {
    editing() {
        console.log('Edit and Render 8k projects');
    }
};

class Laptop {
        constructor(props) {
        this.brand = props.brand;
        this.type = props.type;
            this.profession = this.constructor.name;
        }
        
        run() {
            console.log(`${this.brand} ${this.type} Is On!`);
        }
    }
    

