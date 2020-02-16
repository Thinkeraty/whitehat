class Hurdle {
    constructor() {
        this.distance = 0;
        this.index = null;
    }

    update() {
        var hurdleRef = "/hurdle-game/hurdles/hurdle" + this.index;
        database.ref(hurdleRef).set({
            distance = this.distance;
        })
    }
}