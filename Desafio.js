function CalculaEXP(EXP) {
    if (typeof EXP !== 'number' || !Number.isInteger(EXP)) {
        console.log("Inváido");
    } else if (EXP <= 1000) {
        console.log("Ferro");
    } else if (EXP >= 1001 && EXP <= 2000) {
        console.log("bronze");
    } else if (EXP >= 2001 && EXP <= 5000) {
        console.log("Prata");
    } else if (EXP >= 5001 && EXP <= 7000) {
        console.log("ouro");
    } else if (EXP >= 7001 && EXP <= 8000) {
        console.log("Platina");
    } else if (EXP >= 8001 && EXP <= 9000) {
        console.log("Ascendente");
    } else if (EXP >= 9001 && EXP <= 10000) {
        console.log("Imortal");
    } else if (EXP >= 10001) {
        console.log("Radiante");
    }
}
//Insira um numero aqui
CalculaEXP(12300);
