

Meteor.startup(function () {
  // Maybe here I could calculate all games

  // remove all games to start over
  Games.remove({});

  // code to run on server at startup
  if (Games.find({}).count() === 0) {
    Games.insert({
      "aa15854d-3252-4630-bb6b-d8c0ffcd4a6a": {
        "finished": false,
        "rounds": [
          [1,1,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]
      },
      "fbbabccb-11c2-4572-a7a0-8667c98ed370": { // Paul fbbabccb-11c2-4572-a7a0-8667c98ed370
        "finished": true,
        "rounds": [
          [1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]
      }
    });
    Games.insert({
      "13ab9a80-02c6-401e-ada5-783a11e0fc24": { // Craig 13ab9a80-02c6-401e-ada5-783a11e0fc24
        "finished": false,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,1,1,5],
          [0,0,0,0,0,1,5]
        ]
      },
      "aa15854d-3252-4630-bb6b-d8c0ffcd4a6a": {
        "finished": true,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,0,0,1],
          [0,0,0,0,1,0,1]
        ]
      }
    });
    Games.insert({
      "13ab9a80-02c6-401e-ada5-783a11e0fc24": { // Craig 13ab9a80-02c6-401e-ada5-783a11e0fc24
        "finished": false,
        "rounds": [
          [0,2,1,2,0,1,1],
          [0,0,0,0,0,0,1],
          [0,0,0,0,1,0,1]
        ]
      },
      "fbbabccb-11c2-4572-a7a0-8667c98ed370": { // Paul fbbabccb-11c2-4572-a7a0-8667c98ed370
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