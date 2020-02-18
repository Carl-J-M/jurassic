const Park = function (name, ticketPrice, dinoArray) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurArray = dinoArray;
}

Park.prototype.get_dinos = function() {
  return this.dinosaurArray.length;
}
Park.prototype.add_dino = function(dino) {
  this.dinosaurArray.push(dino);
}
Park.prototype.sub_dino = function() {
  this.dinosaurArray.pop();
}
Park.prototype.most_popular = function() {
  x = 0;
  this.dinosaurArray.forEach(function (dinosaur) {
      if (dinosaur.guestsAttractedPerDay >= x){
      x = dinosaur.guestsAttractedPerDay;
      }
  });
  return x;
}
Park.prototype.get_species = function(species_name) {
  let matches = [];
  this.dinosaurArray.forEach(function (dinosaur) {
    if (dinosaur.species === species_name) {
        matches.push(dinosaur.species);
    }
  });
  return matches;
}
Park.prototype.get_total_visitors = function() {
  let total_visitors = 0;
  this.dinosaurArray.forEach(function (dinosaur) {
    total_visitors += dinosaur.guestsAttractedPerDay;
  });
  return total_visitors;
}

Park.prototype.get_annual_visitors = function() {
  let annual = this.get_total_visitors() * 365;
  return annual;
}

Park.prototype.get_annual_revenue = function() {
  let annual_revenue = this.get_annual_visitors() * this.ticketPrice;
  return annual_revenue;
}
module.exports = Park;
