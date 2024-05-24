// 버튼 클릭 시 페이지 전체를 노란색으로
$(function() {
  $("#btn").click(function(){
    $("body").css("background-color","yellow");
  });
  $(".btn").click(function() {
    $("p .intro").css("background-color","pink");
  });
});