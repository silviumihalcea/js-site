jQuery(function () {
  //---------------------------------------------headline
  $(".menu a").on("click", "span", function () {
    $("span.active").removeClass("active");
    $(this).addClass("active");
  });

  //------------------------------buton logare internet banking
  $(".btn-group div:first-child").on("mouseover", function () {
    $(this).css("background-color", "#339800");
  });
  $(".btn-group div:first-child").on("mouseout", function () {
    $(this).css("background-color", "#52ad30");
  });
  $(".btn-group div:first-child").on("mousedown", function () {
    $(this).css("background-color", "#52ad30");
  });
  $(".btn-group div:last-child").on("mouseover", function () {
    $(this).css("background-color", "#339800");
  });
  $(".btn-group div:last-child").on("mouseout", function () {
    $(this).css("background-color", "#52ad30");
  });
});
