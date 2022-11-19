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

  $("#currentDay").text(dayjs().format("[Today is] dddd, MMMM DD, YYYY"));

  function timeHighlight() {
    var currentTime = dayjs().hour();
    console.log(currentTime);

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockTime);

      if (blockTime < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  timeHighlight();
});
