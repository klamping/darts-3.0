var Game = function (model) {
  this.id = model._id;

  this.players = [];

  var properties = Object.keys(model);

  // if you want to mimic for-in behavior
  var i, len;

  for (i=0, len=properties.length; i < len; i++){
    if(properties[i] !== "_id") {
      var playerId = properties[i];
      this.players.push(new Player(
        playerId,
        model[playerId].rounds
      ));
    }
  }

  Object.defineProperties(this, {
    winnerIndex: {
      get: function() {
        return this.players[0].total > this.players[1].total ? 0 : 1;
      }
    },
    winner: {
      get: function () {
        return this.players[this.winnerIndex];
      }
    },
    loser: {
      get: function () {
        return this.players[1 - this.winnerIndex];
      }
    }
  });
};

var Player = function (playerId, rounds) {
  this.id = playerId;

  this.rounds = [
    new Round(rounds[0]),
    new Round(rounds[1]),
    new Round(rounds[2])
  ];

  Object.defineProperties(this, {
    total: {
      get: function () {
        var total = 0;
        for (var x = 0; x < this.rounds.length; x++) {
          total += this.rounds[x].total;
        }
        return total;
      }
    },
    name: {
      get: function () {
        var name = Meteor.users.findOne(playerId) ? Meteor.users.findOne(playerId).profile.name : "??";
        return name;
      }
    }
  });
};

var Round = function (data) {
  this.hits = data;
  var values = [15,16,17,18,19,20,25];

  Object.defineProperty(this, "total", {
    get: function () {
      var total = 0;
      for (var x = 0; x < this.hits.length; x++) {
        total += this.hits[x] * values[x];
      }
      return total;
    },
    enumerable: true
  });
};