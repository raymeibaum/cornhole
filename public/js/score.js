const socket = io();

const $redScore = $('h1#red-score');
const $blackScore = $('h1#black-score');

let redScore = 0;
let blackScore = 0;

socket.on('black-plus', function() {
  $blackScore.text(++blackScore);
});
socket.on('black-minus', function() {
  $blackScore.text(--blackScore);
});
socket.on('red-plus', function() {
  $redScore.text(++redScore);
});
socket.on('red-minus', function() {
  $redScore.text(--redScore);
});
