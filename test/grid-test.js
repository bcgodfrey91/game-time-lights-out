const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light');
const validGames = require('../lib/validGames');

describe('Grid', function() {

  it('should create a function', function() {
    assert.isFunction(Grid);
  });

  it('should be an Object', function() {
    var grid = new Grid();
    assert.isObject(grid);
  });

  it('should pull in an array of winnable games', function () {
    var grid = new Grid();

    assert.deepEqual(grid.games, validGames);
  });


  it('should pull in a key that indicates where lights should go', function (){
    var grid = new Grid();

    var expected = {
      0: [0, 0],
      1: [0, 1],
      2: [0, 2],
      3: [0, 3],
      4: [0, 4],
      5: [1, 0],
      6: [1, 1],
      7: [1, 2],
      8: [1, 3],
      9: [1, 4],
      10: [2, 0],
      11: [2, 1],
      12: [2, 2],
      13: [2, 3],
      14: [2, 4],
      15: [3, 0],
      16: [3, 1],
      17: [3, 2],
      18: [3, 3],
      19: [3, 4],
      20: [4, 0],
      21: [4, 1],
      22: [4, 2],
      23: [4, 3],
      24: [4, 4]
    }

    assert.deepEqual(grid.key, expected);
    assert.deepEqual(grid.key[1], expected[1]);
    assert.deepEqual(grid.key[2], expected[2]);
  });

  describe('checkForLightsOut()', function () {

    it('should return false if there are any lights on', function () {
      var grid = new Grid(0);
      assert.isFalse(grid.checkForLightsOut());
    });

    it('should return true if all lights are off', function () {
      var grid = new Grid(0);

      grid.rows.forEach(function (row, index) {
        row.forEach(function (light, index) {
          light.state = false;
        });
      });

      assert.isTrue(grid.checkForLightsOut());
    });

  });
});
