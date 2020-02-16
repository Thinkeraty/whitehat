class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('/hurdle-game/gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/hurdle-game/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('hurdle-game/playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200, 20, 20);
    player2 = createSprite(300,200, 20, 20);
    player3 = createSprite(100,200, 20, 20);
    player4 = createSprite(300,200, 20, 20);
    players = [player1, player2, player3, player4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    player.getPlayersAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the players
      var x = 0;
      var y = 175;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the players a little away from each other in y direction
        y = y + 100;
        //use data form the database to display the players in y direction
        x = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2 + 600;
          camera.position.y = players[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(32) && player.index !== null){
      player.distance -= 10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;

      player.rank += 1;

      Player.updatePlayersAtEnd(player.rank);

      text("Your Rank: " + player.rank, displayWidth/2 - 50, y - 120);

      console.log(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");



  }
}