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

Template.rounds.events = {
  'click .showRound' : function (evt) {
    Session.set('round', evt.target.dataset['round']);
  }
};

Template.round.roundNum = function () {
  return parseInt(Session.get('round'), 10) + 1;
};

Template.round.target = function () {
  return [15,16,17,18,19,20,25];
};

Template.target.hit = function () {
  console.log(this.toString());
  var hitNum = 9;
  return [0,1,2,3,4,5,6];
};

Template.target.count = function () {
  return this;
};