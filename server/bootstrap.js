Meteor.startup(function () {
  // Maybe here I could calculate all games

  // remove all games to start over
  Games.remove({});

  // code to run on server at startup
  if (Games.find({}).count() === 0) {
    Games.insert({
      "7a258d5c-22c2-4fe0-9d9c-59dc965956d5": {
        "finished": false,
        "rounds": [
          [1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]
      },
      "7a258d5c-22c2-4fe0-9d9c-59dc965956d2": {
        "finished": true,
        "rounds": [
          [1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]
      }
    });
    Games.insert({
      "7a258d5c-22c2-4fe0-9d9c-59dc965956d5": {
        "finished": false,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,0,0,1],
          [0,0,0,0,1,0,1]
        ]
      },
      "7a258d5c-22c2-4fe0-9d9c-59dc965956da": {
        "finished": true,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,1,1,5],
          [0,0,0,0,0,1,5]
        ]
      }
    });
    Games.insert({
      "7a258d5c-22c2-4fe0-9d9c-59dc965956dd": {
        "finished": false,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,0,0,1],
          [0,0,0,0,1,0,1]
        ]
      },
      "7a258d5c-22c2-4fe0-9d9c-59dc965956da": {
        "finished": true,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,1,1,0],
          [0,0,0,0,0,1,0]
        ]
      }
    });
  }
});