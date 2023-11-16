//4.Pure Function
//2.b is Side effect เขียนแล้วไม่ได้ใช้=ขยะ
const b = 5;
function addPure(a,b) {
    return a + b
}

//call function
const total = addPure(10 , 20)
console.log(total)