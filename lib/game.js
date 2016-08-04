const Grid = require('./grid');

const game = new Grid();

$(document).ready(function() {
  game.createGame();
  setAllLightIds();

  $('td').on('click', function() {
    var lightId = $(this).data("id");
    game.changeLightState(lightId);
    var lightPos = game.key[lightId];
    var currentLightState = game.game[lightPos[0]][lightPos[1]];
    $(this).attr("id", this.id = `${currentLightState.state}`);
  });

  $('td').on('click', function() {
    var lightId = $(this).data("id");
    var surroundingLightPos = game.surroundingKeys[lightId];
    changeSurroundingLights(surroundingLightPos);
    setAllLightIds();
    if (checkGame()) alert("YOU WIN");
  });
});

function setAllLightIds() {
  $('td').each(function(index, light) {
    var lightPos = game.key[index];
    var currentLightState = game.game[lightPos[0]][lightPos[1]];
    $(this).attr('id', this.id = `${currentLightState.state}`);
  });
}

function changeSurroundingLights(surroundingLightPos) {
  surroundingLightPos.forEach(function(lightNumber) {
    game.changeLightState(lightNumber);
  });
}

function checkGame() {
  var lightStates = [];
  game.game.forEach(function(row) {
    row.forEach(function(light) {
      if (!light.state) {
        lightStates.push("off")
      } else {
        lightStates.push("on")
      }
    })
  })
  return lightStates.every(function(element){ return element === "off" });
}
