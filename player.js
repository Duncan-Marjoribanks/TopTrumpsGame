const Player = function(){
  this.hand = [];
}

Player.prototype.take = function(card){
this.hand.push(card);
};
Player.prototype.loseCard = function(card){
  this.hand.pop(card);
}
module.exports = Player;
