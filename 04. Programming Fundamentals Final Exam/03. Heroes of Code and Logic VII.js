function heroesOfCode(inputArr) {
    // GET INPUT AND PREPARE LOGIC
    const numHeroes = +inputArr.shift();
    // console.log([numHeroes])

    const maxHP = 100, maxMP = 200;
    const heroesMap = new Map();

    function processHero(times){
        let n = times;
        while (n !== 0){
            //  heroName, stats
            const [heroName, health, mana] = inputArr.shift().split(" ");
            const stats = [+health, +mana];
            heroesMap.set(heroName, stats);
            n--;
        }
        console.table(heroesMap)
    }
    processHero(numHeroes);
    // console.log(inputArr)

    // PROCESS COMMANDS
    // After the "End" command, we print the remaining living heroes.
    for (const element of inputArr) {
        console.log(element)
    }
}

heroesOfCode([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
]);

// heroesOfCode([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End",
// ]);
