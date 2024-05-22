function scrolling() {
  const navBar = document.getElementById("navBar");

  let yBlockOffset = $("#" + event.target.innerHTML).offset().top;
  let headerHeight = $("#navBar").height();
  let margins = parseInt($("#" + event.target.innerHTML).css("margin-bottom"));
  let totalScroll = yBlockOffset - headerHeight - margins;

  $("html, body").animate(
    {
      scrollTop: totalScroll
    },
    1000
  );

  e.preventDefault();
}
