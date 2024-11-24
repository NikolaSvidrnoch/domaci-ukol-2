function justFood(pocetLidi) {
    let cenaZaOsobu = 300;
    let celkovaCena = pocetLidi * cenaZaOsobu;
    return `Catering od Just Food pro ${pocetLidi} lidí za ${celkovaCena} Kč`;
}

function yourMama(pocetLidi) {
    let cenaZaOsobu = 700;
    let celkovaCena = pocetLidi * cenaZaOsobu;
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${celkovaCena} Kč`;
}

function flavourHaven(pocetLidi) {
    let cenaZaOsobu = 1300;
    let celkovaCena = pocetLidi * cenaZaOsobu;
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${celkovaCena} Kč`;
}

function createEvent(nazevUdalosti, pocetLidi, catering) {
    let zpravaOCateringu = catering(pocetLidi);
    return `Událost ${nazevUdalosti} s ${zpravaOCateringu}`;
}

// logovani
console.log(justFood(50));

console.log(yourMama(50));

console.log(flavourHaven(50));

console.log(createEvent("Oslava narozenin", 50, justFood));

console.log(createEvent("Firemní večírek", 50, yourMama));

console.log(createEvent("Galavečer", 50, flavourHaven));
