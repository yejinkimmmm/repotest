$(function() {
  $("#btn1").click(function() {
    $("li:first-child").css("color","red");
  });

  $("#btn2").click(function() {
    $("a[href = 'www.daum.net']").css("background-color","pink");
  })
;
  $("#btn3").click(function() {
    $("tr:odd").css("background-color","gold");
  }); // 홀짝 -> even, odd
});

// document.body. ...... $("*") == $("body")
// <p id="aa"> -- $("#aa")
// <p class="bb"> -- $(".bb")
// <a href="ccc"> -- $("a[href = 'ccc' OR != 'ccc']")
// DOM(Document Object Model) 
