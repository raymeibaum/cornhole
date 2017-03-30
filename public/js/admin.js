const socket = io();

function adjustScore(event) {
  socket.emit('adjust-score', event.target.id);
}


$(function() {
  $('div.jumbotron').on('click', 'button', adjustScore);
})
