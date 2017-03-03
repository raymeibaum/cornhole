$(function() {

  var teamBlackScore = 0, teamRedScore = 0;

  $('div.btn-group.team-black').on("click", "button", function($event) {
    switch ($event.target.innerText) {
      case "+1":
        $($event.delegateTarget.parentNode.firstElementChild).text(++teamBlackScore);
        break;
      case "-1":
        $($event.delegateTarget.parentNode.firstElementChild).text(--teamBlackScore);
        break;
      case "Clear":
        teamBlackScore = 0;
        $($event.delegateTarget.parentNode.firstElementChild).text(teamBlackScore);
        break;
      default:
    }
  });
  $('div.btn-group.team-red').on("click", "button", function($event) {
    switch ($event.target.innerText) {
      case "+1":
        $($event.delegateTarget.parentNode.firstElementChild).text(++teamRedScore);
        break;
      case "-1":
        $($event.delegateTarget.parentNode.firstElementChild).text(--teamRedScore);
        break;
      case "Clear":
        teamRedScore = 0;
        $($event.delegateTarget.parentNode.firstElementChild).text(teamRedScore);
        break;
      default:
    }
  });
  $('form').submit(function($event) {
    $event.preventDefault();

    var playerOne = $event.target[0].value;
    var playerTwo = $event.target[1].value;

    var newWell = `<div class="well">${playerOne} and ${playerTwo}<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`

    $('div.well-container').append(newWell);
  });
  $('div.well-container').on('click', 'button', function($event) {
    $(this).parent().fadeOut(function() {
      this.remove();
    });
  })
})
