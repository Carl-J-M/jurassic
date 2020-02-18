const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;
let t_rex;
let stego;

  beforeEach(function () {
    t_rex = new Dinosaur('t-rex', 'carnivore', 50);
    stego = new Dinosaur('stegosaurus', 'herbivore', 30);
    raptor = new Dinosaur('raptor', 'omnivore', 15);
    park = new Park('Jurassic Park', 50, [t_rex,stego,raptor]);

  });

  it('should have a name', function(){
    const actual = park.name;

    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;

    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.get_dinos();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    gigantosaur = new Dinosaur('gigantosaur', 'herbivore', 150);
    park.add_dino(gigantosaur);
    const actual = park.get_dinos();
    assert.strictEqual(actual, 4);
  });
  it('should be able to remove a dinosaur from its collection', function(){
    park.sub_dino();
    const actual = park.get_dinos();
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.most_popular();
    assert.strictEqual(actual, 50);
  });


  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.get_species('stegosaurus');
    assert.deepStrictEqual(actual, ['stegosaurus']);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.get_total_visitors();
    assert.strictEqual(actual, 95);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.get_annual_visitors();
    assert.strictEqual(actual, 34675);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.get_annual_revenue();
    assert.strictEqual(actual, 1733750);
  });

});
