class Binatang {
    constructor(nama, kaki, habitat) {
      if (this.constructor === Binatang) {
        throw new TypeError('can\'t create object from abstract class');
      }
      this.nama = nama;
      this.kaki = kaki;
      this.habitat = habitat;
    }
    
    bersuara() {
      throw new Error('Method "bersuara()" harus diimplementasikan pada subclass');
    }
    makan(){
        throw new Error('Method "makan()" harus diimplementasikan pada subclass');
    }
  }

class Anjing extends Binatang {
    constructor(nama, kaki, habitat, jenis, warna) {
        super(nama, kaki, habitat);
        this.jenis =  jenis;
        this.warna = warna;
    }
    bersuara() {
        console.log('Guk Guk...');
      }
    makan() {
        console.log('Tulang');
      }
}

class Kucing extends Binatang {
    constructor(nama, kaki, habitat, warna){
        super(nama, kaki, habitat);
        this.warna = warna;
    }
    bersuara() {
        console.log('Miaw Miaw...');
    }
    makan() {
        console.log('ikan');
      }
}

class Ayam extends Binatang{
    constructor(nama, kaki, habitat, warna){
        super(nama, kaki, habitat);
        this.warna = warna;
    }

    bersuara(){
        console.log('kukuruyuk!');
    }
    makan() {
        console.log('pelet ayam');
      }
}

class Ikan extends Binatang{
    constructor(nama, kaki, habitat, warna){
        super(nama, kaki, habitat);
        this.warna = warna;
    }
    bersuara() {
        console.log('Blub..Blubb');
      }
    makan(){
        console.log('makan pelet majikan!');
    }
}

      let binatang = [new Anjing('Spike', ' Mempunyai 4 Kaki', 'Halaman', 'Coklat', 'Coklat'),
                      new Kucing('Kitten', ' Mempunyai 4 Kaki', 'Rumah', 'Abu Abu', 'British Sort Hair', '3 Tahun'),
                      new Ayam('Heru', ' Mempunyai 2 kaki', 'Kandang', 'Hitam', '2 Tahun'),
                      new Ikan('Lilu', ' Tidak Punya', 'akuarium', 'jingga')];
      
for(let i = 0; i < binatang.length; i++) {
console.log(binatang[i].nama + binatang[i].kaki + ' yang tinggal di ' + binatang[i].habitat + ' Berwarna '+ binatang[i].warna);
binatang[i].makan();
binatang[i].bersuara();
}
