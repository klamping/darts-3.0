Template.round.roundNum = function () {
  return parseInt(Session.get('round'), 10) + 1;
};

Template.round.target = function () {
  return [
    { value: 15, index: 0 },
    { value: 16, index: 1 },
    { value: 17, index: 2 },
    { value: 18, index: 3 },
    { value: 19, index: 4 },
    { value: 20, index: 5 },
    { value: 25, index: 6 }
  ];
};


//   TARGET   //
Template.target.events = {
  'click .targetHit' : function (evt) {
      // update data
      var game = genGames[Session.get('game')];
      game.setHit(Session.get('playerIndex'), Session.get('round'), this.target.index, this.value);
  }
};

Template.target.hit = function () {
  var numHitsAllowed = (this.value == 25) ? 6 : 9;
  var hits = [];

  for (var x = 0; x <= numHitsAllowed; x++) {
    hits.push({
      value: x,
      target: this
    });
  }

  return hits;
};

Template.target.count = function () {
  return this.value;
};

function isHit (hitValue, thisValue) {
  var game = genGames[Session.get('game')];
  var player = game.players[Session.get('playerIndex')];
  var round = Session.get('round');

  // get num hits for target
  var targets = [15,16,17,18,19,20,25];
  var targetIndex = _.indexOf(targets, hitValue);
  var numHits = player.rounds[round].hits[targetIndex];

  return thisValue === numHits;
}

Template.target.checked = function () {
  // if num hits matches this index
  return isHit(this.target.value, this.value) ? "checked" : "";
};

Template.target.isHit = function () {
  return isHit(this.target.value, this.value) ? "active" : "";
};