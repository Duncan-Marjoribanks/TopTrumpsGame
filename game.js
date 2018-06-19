const Game = function() {
}


Game.prototype.compareCardStrength = function(card1, card2) {
  if (card1.strength < card2.strength) {
    return card2;
  }
    else { return card1;
    }
};

Game.prototype.compareCardAgility = function(card1, card2) {
  if (card1.agility < card2.agility) {
    return card2;
  }
    else { return card1;
    }
};

Game.prototype.compareCardIntelligence = function(card1, card2) {
  if (card1.intelligence < card2.intelligence) {
    return card2;
  }
    else { return card1;
    }
};


module.exports = Game;
