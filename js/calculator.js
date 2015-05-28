$(document).ready(function() {

  $('body').on('click', 'button', function (e) {

    theresults = $('#results').val();

    if (this.id == "=") {
      $('#results').val(eval(theresults));
    } else if (this.id == "clear") {
      $('#results').val("");
    } else {
      $('#results').val(theresults + this.id);
    }


  });

  // bind enter key for manual input



});
