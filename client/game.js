Template.rounds.events = {
  'click .showRound' : function (evt) {
    Session.set('round', evt.target.dataset['round']);
  }
};

Template.rounds.rounds = function () {
  return [0,1,2];
};

Template.rounds.roundNum = function () {
  return this;
};

Template.rounds.playerRoundScore = function () {
  var game = genGames[Session.get('game')];
  var player = game.players[Session.get('playerIndex')];
  return player.rounds[this].total;
};

Template.rounds.oppRoundScore = function () {
  var game = genGames[Session.get('game')];
  var player = game.players[1 - Session.get('playerIndex')];
  return player.rounds[this].total;
};

Template.round.roundNum = function () {
  return parseInt(Session.get('round'), 10) + 1;
};

Template.round.target = function () {
  return [
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 25 }
  ];
};


//   TARGET   //
Template.target.events = {
  'click .targetHit' : function (evt) {
      // update data
  }
};

Template.target.hit = function () {
  var numHitsAllowed = (this == 25) ? 6 : 9;
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

Template.target.checked = function () {
  var game = genGames[Session.get('game')];
  var player = game.players[Session.get('playerIndex')];
  var round = Session.get('round');

  // get num hits for target
  var targets = [15,16,17,18,19,20,25];
  var targetIndex = _.indexOf(targets, this.target.value);
  var numHits = player.rounds[round].hits[targetIndex];

  // if num hits matches this index
  return this.value == numHits ? "checked" : "";
};