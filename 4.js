let a = 4
let b = 4
let r = 3
let n = 1
let un = 0
let c = 0
    do{
        un = a*(r**(n-1))
        c += un
        n++
        console.log(c)
    }while(n<11)