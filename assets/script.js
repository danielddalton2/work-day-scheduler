$(document).ready(function () {
  $(".saveBtn").click(function () {
    console.log($(this));
    var time = $(this).parent().attr("id");
    console.log(time);
    var text = $(this).siblings("textarea").val();
    console.log(text);
    localStorage.setItem(time, text);
  });

  $(".time-block").each(function () {
    console.log(this);
    var id = $(this).attr("id");
    console.log(id);
    var savedText = localStorage.getItem(id);
    $(this).children("textarea").val(savedText);
  });

  function timeHighlight() {
    var currentTime = dayjs().hour();
    console.log(currentTime);
  
    // iterate through each time block
    $('.time-block').each(function() {
        var blockTime = parseInt($(this).attr('id').split('-')[1]);
        console.log(blockTime);
  
        if (blockTime < currentTime) {
            $(this).addClass('past');
        } else if (blockTime === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
  }

  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
  
  timeHighlight();


  $("#currentDay").text(dayjs().format("[Today is] dddd, MMMM DD, YYYY"));


});

