const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');
const Game = require('../game.js');

describe('Game', function(){
  let game;
  let player1;
  let player2;
  let card1;
  let card2;
  // let card3;
  // let card4;
  // let card5;
  // let card6;

  beforeEach(function(){
    game = new Game();
    player1 = new Player();
    player2 = new Player();
    card1 = new Card('Superman',6,9,7);
    card2 = new Card('Scarlet Witch',7,10,5);
    player1.take(card1);
    player2.take(card2);
  })

  it('should compare 2 cards strength', function(){
    const actualWinner = game.compareCardStrength(card1, card2);
    assert.strictEqual(actualWinner,card2);
  })

  it('should compare 2 cards agility', function(){
    const actualWinner = game.compareCardAgility(card1, card2);
    assert.strictEqual(actualWinner,card1);
  })

  it('should compare 2 cards intelligence', function(){
    const actualWinner = game.compareCardIntelligence(card1, card2);
    assert.strictEqual(actualWinner,card2);
  })

  it("should be able play a turn and set who's turn it is", function(){
    const actualPlayersTurn = game.playTurn(player1, player2);
    assert.strictEqual(actualPlayersTurn, player2);
  })
})
