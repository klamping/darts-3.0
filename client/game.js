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

Template.rounds.isSelected = function () {
  return this == Session.get('round') ? "active" : "";
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