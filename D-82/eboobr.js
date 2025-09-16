function boyukHerfliSozler(metin) {
    let sozler = metin.split(" ");
    for (let i = 0; i < sozler.length; i++) {
        sozler[i] = sozler[i][0].toUpperCase() + sozler[i].slice(1);
    }
    return sozler.join(" ");
}
console.log(boyukHerfliSozler("salam dünya javascript öyrənirəm"));
