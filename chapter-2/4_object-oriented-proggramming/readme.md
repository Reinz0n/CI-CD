# Object Oriented Programming

## 1. Inheritance

Inheritance itu semacam konsep pewarisan yang kita terapkan di OOP

**Example :**

```js
// create parent class
class Human {
  constructor(props) {
    this.name = props.name;
    this.address = props.address;
  }

  introduce() {
    console.log(`Hello my name is ${this.name}!`);
  }

  work() {
    console.log("Work!");
  }
}

class Proggrammer extends Human {
  constructor(props) {
    super(props);
    this.programmingLanguage = props.programmingLanguage;
  }

  code() {
    console.log(
      `Write`,
      this.programmingLanguage[
        Math.floor(Math.random() * this.programmingLanguage.length)
      ],
      "Program."
    );
  }
}

let mark = new Proggrammer({
  name: "Marc",
  address: "Canada",
  programmingLanguage: ["JavaScript", "TypeScript", "PHP", "Golang"],
});
console.log(mark.name); // access property from parent class
console.log(mark.address); // access property from parent class
console.log(mark.programmingLanguage); // access child from parent class
mark.introduce(); // access method from parent class
mark.work(); // access method from parent class
mark.code(); // access child from parent class
```

## 2. Encapsulation

1. **Public**
   Suatu visibility level, dimana kalau kita mendefinisikan suatu method atau property secara publik, artinya method/ property itu bisa dipanggil di luar deklarasi kelas.
   **Example :**

   ```js

   ```

2. **Private**
   Suatu method /property yang nggak bisa diakses di luar deklarasi class.
   **Example :**

   ```js

   ```

3. **Protected**

   Protected visibility ini bisa kita akses di dalam sub class. Ini yang jadi pembeda antara private dengan protected.
   **Example :**

   ```js

   ```

## 3. Abstraction

**Example :**

```js

```

## 4. Polymorphism

Polymorphism berarti bahwa satu class bisa punya banyak wujud dari sub class-nya.
Biasanya sub class-nya punya perilaku yang beda banget dari super class-nya.

1. **Membuat class Human yang kan dijadikan superclass**

```js
class Human {
  constructor(props) {
    this.name = props.name;
    this.address = props.address;
    this.profession = this.constructor.name;
  }
  introduce() {
    console.log(`My name is ${this.name}`);
  }
  work() {
    console.log(`${this.constructor.name} work!`);
  }
}
```

2. **Membuat helper mixin**

```js
const PublicServer = (Base) =>
  class extends Base {
    save() {
      console.log("Menyelamatkan orang lain");
    }
  };

const Military = (Base) =>
  class extends Base {
    shoot() {
      console.log("Dor! Dor! Dor!");
    }
  };
```

3. **Membuat class Doctor** (extend dari PublicServer)

```js
class Doctor extends PublicServer(Human) {
  constructor(props) {
    super(props);
  }
  work() {
    super.work();
    super.save();
  }
}
```

4. **Membuat class Police** (extend dari PublicServer dan Military)

```js
class Police extends PublicServer(Military(Human)) {
  constructor(props) {
    super(props);
    this.rank = props.rank;
  }
  work() {
    super.work();
    super.save();
    super.shoot();
  }
}
```

5. **Membuat class Army** (extend dari PublicServer dan Military)

```js
class Army extends PublicServer(Military(Human)) {
  constructor(props) {
    super(props);
    this.rank = props.rank;
  }
  work() {
    super.work();
    super.save();
    super.shoot();
  }
}
```
