class Form {
    constructor() {

    }

    display() {
        var title = createElement('h3');

        title.html("Car Racing Game");
        title.position(500, 20);

        var input = createInput("Player Name");
        input.position(500, 160);

        var button = createButton("Enter Game!");
        button.position(540, 200);

        var greeting = createElement('h5');

        button.mousePressed(function() {
            input.hide();

            button.hide();

            var name = input.value();

            playerCount += 1;

            player.update(name);

            player.updateCount(playerCount);

            greeting.html("Ready To Play " + name + " ?");
            greeting.position(490, 50);
        })
        };
    }