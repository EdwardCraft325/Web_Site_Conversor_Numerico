function desdeDecimal(dec) {
    document.getElementById("binario").value = dec.toString(2);
    document.getElementById("octal").value = dec.toString(8);
    document.getElementById("hex").value = dec.toString(16).toUpperCase();
}

function desdeOctal(oct) {
    let dec = parseInt(oct, 8);
    desdeDecimal(dec);
    document.getElementById("decimal").value = dec;
}

function desdeHex(hex) {
    let dec = parseInt(hex, 16);
    desdeDecimal(dec);
    document.getElementById("decimal").value = dec;
}

function desdeBin(bin) {
    let dec = parseInt(bin, 2);
    desdeDecimal(dec);
    document.getElementById("decimal").value = dec;
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
