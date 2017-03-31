const socket = io();

const $upNextContainer = $('div.well-container');

function submitTeam($event) {
  $event.preventDefault();
  socket.emit('signup', {
    teammate1: $event.target[0].value,
    teammate2: $event.target[1].value
  });
}

socket.on('signup-list', function(list) {
  $upNextContainer.empty();
  list.forEach(function(team) {
    $upNextContainer.append(`<div class="well"><strong>${team.teammate1} and ${team.teammate2}</strong></div>`)
  });
});

$(function() {
  socket.emit('get-signup-list');
  $('form#signup').on('submit', submitTeam);
});