function guineaPig(input) {
    let [food, hay, cover, pigWeight] = input.slice(0).map((el) => {
        return Number(el) * 1000;
    });
    const coverQuantity = Number(pigWeight / 3).toFixed(2); // possible fail

    for (let day = 1; day <= 30; day++) {
        // console.log("day=", day, food)

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
        // FEED PUPPY WITH 300 gr (EVERYDAY)
        food -= 300;
        // CHECK DAY
        if (day % 3 == 0) {
            cover = Number((cover - coverQuantity).toFixed(2));
        }
        if (day % 2 == 0) {
            let hayToGive = 0.05 * food;
            hay -= hayToGive;
        }
    }
    // FIX NUMBERS
    food = (food / 1000).toFixed(2);
    hay = (hay / 1000).toFixed(2);
    cover = (cover / 1000).toFixed(2);
    // PRINT RESULT
    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log("Merry must go to the pet store!");
        return; // unpredictable expectation for the result !!!
    }
    console.log(
        `Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hay}, Cover: ${cover}.`
    );
}

// guineaPig(["10", "5", "5.2", "1"]);
// guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
