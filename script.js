function desdeDecimal(dec) {
    if (isNaN(dec)) return;

    document.getElementById("binario").value = dec.toString(2);
    document.getElementById("octal").value = dec.toString(8);
    document.getElementById("hex").value = dec.toString(16).toUpperCase();
}

function desdeOctal(oct) {
    let dec = parseInt(oct, 8);
    if (isNaN(dec)) return;

    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}

function desdeHex(hex) {
    let dec = parseInt(hex, 16);
    if (isNaN(dec)) return;

    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}

function desdeBin(bin) {
    let dec = parseInt(bin, 2);
    if (isNaN(dec)) return;

    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}

function limpiarCampos() {
    document.getElementById("decimal").value = "";
    document.getElementById("octal").value = "";
    document.getElementById("hex").value = "";
    document.getElementById("binario").value = "";
}

document.getElementById("decimal").addEventListener("input", e => {
    let val = e.target.value;
    if (val !== "") desdeDecimal(parseInt(val));
});

document.getElementById("octal").addEventListener("input", e => {
    let val = e.target.value;
    if (val !== "") desdeOctal(val);
});

document.getElementById("hex").addEventListener("input", e => {
    let val = e.target.value;
    if (val !== "") desdeHex(val);
});

document.getElementById("binario").addEventListener("input", e => {
    let val = e.target.value;
    if (val !== "") desdeBin(val);
});

function toggleMenu() {
    document.getElementById("sidemenu").classList.toggle("open");}

    const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuOverlay.classList.toggle('open');
});
