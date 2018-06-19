const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');
describe('Player', function(){

let player;
let card;

beforeEach(function(){
  player = new Player();
  card = new Card('Superman', 6, 9, 7);
});

it('should have cards', function(){
  player.take(card);
  const actualCards = player.hand;
  assert.deepStrictEqual(actualCards, [card]);
})

it('should be able to lose a card', function(){
  player.take(card);
  player.loseCard(card);
  const actualHandSize = player.hand.length;
  assert.strictEqual(actualHandSize, 0);
})

})
