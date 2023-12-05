let alas = document.getElementById("alas");
let tinggi = document.getElementById("tinggi");
let hasilLuas = document.getElementById("hasilluas");

function submitLuas(){
    let luas = 0.5 * alas.value * tinggi.value;
    let confirm = window.confirm("Apakah nilai yang Anda masukkan sudah benar?");
    if (confirm){
        hasilLuas.innerHTML = `<p>L = 1/2 x a x t <br> L = 1/2 x ${alas.value} x ${tinggi.value} <br> L = ${luas}</p>`
    }
}

function resetLuas(){
    let confirm = window.confirm("Apakah Anda yakin ingin mereset data yang sudah ada?");
    if (confirm){
        hasilLuas.innerHTML = ` `
    }
}

let A = document.getElementById("SisiA");
let B = document.getElementById("SisiB");
let C = document.getElementById("SisiC");
let hasilKeliling = document.getElementById("hasilkeliling");

function submitKeliling(){
    let keliling = A.value + B.value + C.value;
    let confirm = window.confirm("Apakah nilai yang Anda masukkan sudah benar?");
    if (confirm){
        hasilKeliling.innerHTML = `<p>K = SisiA + SisiB + SisiC <br> K = ${A.value} + ${B.value} + ${C.value} <br> K = ${keliling}</p>`
    }
}

function resetKeliling(){
    let confirm = window.confirm("Apakah Anda yakin ingin mereset data yang sudah ada?");
    if (confirm){
        hasilKeliling.innerHTML = ` `
    }
}