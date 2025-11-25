function desdeDecimal(dec) {
    document.getElementById("binario").value = dec.toString(2);
    document.getElementById("octal").value = dec.toString(8);
    document.getElementById("hex").value = dec.toString(16).toUpperCase();
}

function desdeOctal(oct) {
    let dec = parseInt(oct, 8);
    if (isNaN(dec)) return; //Evita errores si el valor no es válido
    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}

function desdeHex(hex) {
    let dec = parseInt(hex, 16);
    if (isNaN(dec)) return; //Evita errores si el valor no es válido{
    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}

function desdeBin(bin) {
    let dec = parseInt(bin, 2);
    if (isNaN(dec)) return; //Evita errores si el valor no es válido{
    document.getElementById("decimal").value = dec;
    desdeDecimal(dec);
}
