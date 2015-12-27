/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var tertiaryText = function(title, callback) {

} 

var main = new UI.Card({
  title: 'Add task',
  bodyColor: 'white'
});

main.action({
  up: 'images/abcdefghi.png',
});

main.show();

main.on('click', 'up', function(e) {

});

main.on('click', 'select', function(e) {

});

main.on('click', 'down', function(e) {

});