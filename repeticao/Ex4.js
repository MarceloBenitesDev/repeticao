let a = 0, b = 1;
let i = 1

console.log("Sequencia:")

while (i <= 10) {
    console.log(b)
    let t = a;
    a = b;
    b = t + b;
    i++
}