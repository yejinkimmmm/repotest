$(document).ready(function() { // $(function() { 만 써도 됨
  // h1 태그를 클릭하면 실행해
  // $("h1")  click   function()    
  $("h1").click(function() { 
    $(this).hide(); // 클릭하면 사라지게 하기

  }) // this 는 자기 자신이라 "" , '' 필요 없음
}); 