let panjang = 20.5
let lebar = 30
let harga = 1500000
let ppn = 0.15

var luastanah = (panjang*lebar)
var totalharga = (luastanah*harga)
var totalpajak = (totalharga*ppn)

console.log("Diketahui")
console.log("   panjang(p)  = 20.5  m")
console.log("   lebar(l)    = 30    m")
console.log("   ppn         = 0.15")
console.log("   Harga/meter = Rp1.500.0000")
console.log("Jawab")
console.log("   Luas Tanah  = " + luastanah + " m^2")
console.log("   Harga Tanah = Rp" + totalharga)
console.log("   TOTAL Pajak = Rp" + totalpajak)
console.log("   Total Keseluruhan   = Rp" + (totalharga + totalpajak))
