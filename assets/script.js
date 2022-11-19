$(document).ready(function () {
  $(".saveBtn").click(function () {
    console.log($(this));
  var time=$(this).parent().attr("id");
  console.log(time);
  var text=$(this).siblings("textarea").val();
  console.log(text);
  localStorage.setItem(time, text);
  })



  $(".time-block").each(function () {
    console.log(this);
    var id=$(this).attr("id");
    console.log(id);
    var savedText = localStorage.getItem(id);
    $(this).children("textarea").val(savedText);
  })

  $("#currentDay").text(dayjs().format("[Today is] dddd, MMMM DD, YYYY"));

// TODO: Color coordinate the time

// TODO: Add a message that shows when something is saved 

});
