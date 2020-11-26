class lingkaran{
    constructor (r,phi){
        this.jari_jari = r
        this.phi = phi
    }

    luas = () => {
        return this.phi * (this.jari_jari**2)
    }

    keliling = () => {
        return 2 * this.phi * this.jari_jari
    }
}

class tabung extends lingkaran{
    constructor(r, phi, t){
        super(r, phi)
        this.tinggi = t
    }

    volume = () => {
        return this.phi * (this.jari_jari ** 2) * this.tinggi
    }

    luaspermukaan = () => {
        return this.phi * this.jari_jari * (this.jari_jari * 2 * this.tinggi)
    }
    
    luasselimut = () => {
        return 2 * this.phi * this.jari_jari * this.tinggi
    }
}

class keruncut extends lingkaran{
    constructor(r, phi, t) {
        super(r, phi)
        this.tinggi = t
    }

    volume = () => {
        return (1/3) * this.phi * (this.jari_jari ** 2) * this.tinggi
    }

    luaspermukaan = () => {
        return this.phi * this.jari_jari * (this.jari_jari + (Math.sqrt((this.jari_jari ** 2) + (this.tinggi ** 2))))
    }

    luasselimut = () => {
        return this.phi * this.jari_jari * (Math.sqrt((this.jari_jari ** 2) + (this.tinggi ** 2)))
    }
}

class Bola extends lingkaran{
    constructor(r, phi) {
        super(r, phi)
    }

    volume = () => {
        return (4/3) * this.phi * (this.jari_jari ** 3)
    }

    luaspermukaan = () => {
        return 4 * this.phi * (this.jari_jari ** 2)
    }
}

let gelas = new tabung(7.5, 3.14, 50)
console.log("----- GELAS -----")
console.log("DIket :")
console.log("   Jari-jari   = 7.5")
console.log("   Phi         = 3.14")
console.log("   Tinggi      = 50")
console.log("Jawab:")
console.log("   Volume Gelas        = " + gelas.volume() + " cm^3")
console.log("   Luas Permukaan Gelas= " + gelas.luaspermukaan() + " cm^2")
console.log("   Luas Selimut Gelas  = " + gelas.luasselimut() + "   cm^2")
console.log(" ")

let traffic_cone = new keruncut (10, 3.14, 40)
console.log("---- TRAFFIC CONE ----")
console.log("Diket :")
console.log("   Jari-jari   : ")
console.log("   Phi         = 10")
console.log("   Tinggi      = 40")
console.log("Jawab :")
console.log("   Volume Traffic Cone        = " + traffic_cone.volume() + " cm^3")
console.log("   Luas Permukaan Traffic Cone= " + traffic_cone.luaspermukaan() + " cm^2")
console.log("   Luas Selimut Traffic Cone  = " + traffic_cone.luasselimut() + "   cm^2")
console.log(" ")

let bola = new Bola(15, 3.14)
console.log("---- BOLA ----")
console.log("Diket :")
console.log("   Jari-jari   = 15")
console.log("   Phi         = 3.14")
console.log("Jawab :")
console.log("   Volume Bola         = " + bola.volume() + " cm^3")
console.log("   Luas Permukaan Bola = " + bola.luaspermukaan() + "  cm^2")
console.log(" ")