class KendaraanDarat {
    constructor(data){
        if(this.constructor === KendaraanDarat){
            throw new Error ("tidak bisa melakukan instace pada kelas Animal")
        }
    this.jumlah_roda = data.jumlah_roda; 
    this.bahan_bakar = data.bahan_bakar;
    this.tipePenggerak = data.tipePenggerak;
    }

    road(){
        console.log(`${this.constructor.name} sedang berlajan`)
    }

}