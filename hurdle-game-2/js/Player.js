class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;

    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('/hurdle-game/playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/hurdle-game/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "/hurdle-game/players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('/hurdle-game/players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

   getPlayersAtEnd() {
    database.ref('/hurdle-game/playersAtEnd').on("value", (data) => {
      this.rank = data.val();
    });
  }

  static updatePlayersAtEnd(rank) {
    database.ref('/hurdle-game').update({
      playersAtEnd: rank
    })
  }
}
