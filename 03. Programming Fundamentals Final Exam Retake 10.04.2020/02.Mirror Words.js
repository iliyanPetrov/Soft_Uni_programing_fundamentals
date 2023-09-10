function mirrorWords(text) {
    // PRIMARY IDEA = 2 DIFFERENT REGEX
    // 1 - FIND MATCHES, 2 - VALIDATE FOUND MATCH
    let regex1 = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
}

mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
