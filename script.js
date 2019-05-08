function Game() {
  this.gameOn = true;
  this.history = [[],[]];
  this.clicked = (tile, player) => {
      this.history[player].push(tile);
      this.checkWinner(player);
  };
  this.checkWinner = (player) => {
   x = this.history[player];
      if (x.includes(1) && x.includes(2) && x.includes(3) || x.includes(1) && x.includes(5) && x.includes(9) || x.includes(1) && x.includes(4) && x.includes(7) || x.includes(2) && x.includes(5) && x.includes(8) || x.includes(3) && x.includes(5) && x.includes(7) || x.includes(3) && x.includes(6) && x.includes(9) || x.includes(4) && x.includes(5) && x.includes(6) || x.includes(7) && x.includes(8) && x.includes(9)) {
          this.winner(player);
          this.gameOn = false;
      }
  }
  this.winner = (player) => {
  if(player == 0) {alert("X Menang Bung")}else{alert("O Menang Bung");}
  }
}
var newGame = new Game();
