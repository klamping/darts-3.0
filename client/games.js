var playerGames;
var genGames = {};
Session.set('game');
Session.set('round');

Template.games.games = function () {
  Session.set('playerId', this.userId);
  var search = {};

  search[this.userId] = { $exists: true };
  playerGames = Games.find(search);

  playerGames.forEach(function(game){
    genGames[game._id] = new Game(game);
  });
  playerGames.rewind();

  return playerGames;
};

Template.games.playerRecord = function () {
  var winLossTie = [0,0,0];

  if (!playerGames) {
    return "";
  }

  _.each(genGames, function(game){
    if (game.winner.id === Session.get("playerId")) {
      winLossTie[0] += 1;
    } else {
      winLossTie[1] += 1;
    }
  });

  return winLossTie.join("-");
};

Template.game.result = function (game) {
  // if user is winner
  if ( genGames[this._id].winner.id === Session.get("playerId")) {
    return "beat";
  }
  return "lost to";
};

Template.game.opponent = function () {
  var place = genGames[this._id].players[0].id === Session.get("playerId") ? 1 : 0;
  var opponent = genGames[this._id].players[place]; // get the opposite of the player

  return opponent.name;
};

Template.game.winningScore = function () {
  var winner = genGames[this._id].winner;
  return winner.total;
};

Template.game.losingScore = function () {
  var loser = genGames[this._id].loser;
  return loser.total;
};

Template.games.selectedGame = function () {
  var game = Games.findOne(Session.get('game'));
  return game;
};

Template.games.selectedRound = function () {
  var round = Session.get('round');
  return round;
};

Template.games.events({
  'click .showGame' : function () {
    // template data, if any, is available in 'this'
    Session.set('game', this._id);
    Session.set('round');

    var index = genGames[this._id].players[0].id === Session.get("playerId") ? 0 : 1;
    Session.set('playerIndex', index);
  }
});
