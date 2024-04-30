let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var i = 0; i < Object.keys(statistics).length; i++) {

    if ((Object.keys(statistics)[i].startsWith('r')
    ) || (statistics[Object.keys(statistics)[i]] % 2 == 1)) {
        console.log(statistics[Object.keys(statistics)[i]]);
    }
}