console.log("Primer evento");

setTimeout(() => {
    console.log("Segundo evento");
}, 3000);

setTimeout(() => {
    console.log("Tercer evento");
}, 0);

setTimeout(() => {
    console.log("Cuarto evento");
}, 0);

console.log("Quinto evento");