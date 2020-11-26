let tinggibadan = 1.6 //dalam meter
let beratbadan = 60   // dalam kg

var BMI = (beratbadan / (tinggibadan**2))

console.log("Diketahui :")
console.log("   Tinggi badan Rhodey = 170 cm")
console.log("   Berat badan Rhodey = 90 Kg")
console.log("Jawab:")
console.log("   BMI =" + BMI)
console.log("Status Berat badan Rhodey :")
if (BMI <18.5) {
    console.log("kekurangan berat badan") 
} else if ( BMI <= 24.9){
    console.log("normal/ideal")
} else if ( BMI <= 29.9){
    console.log("kelebihan berat badan")
} else {
    console.log("kegemukan/obesitas")
}