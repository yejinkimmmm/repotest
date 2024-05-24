$(function() {
  // $("#btn1").click(function() {
  //   $("p.enter:first").hide();
  // });
  // $("#btn1").dblclick(function() {
  //   $("p.enter:first").show();
  // });

  $("#btn1").on({ // function 말고 on 쓰는 법
    click : function() {$("p.enter:first").hide()},
    dblclick : function() {$("p.enter:first").show()}
  });

  // $("p").mouseenter(function () { 
  //   $(this).css("background-color","skyblue");
  // });
  // $("p").mouseleave(function () { 
  //   $(this).css("background-color","");
  // });

  $("p").on({
    mouseenter : function() {$(this).css("background-color","skyblue")},
    mouseleave : function() {$(this).css("background-color","")}
  });

  $("p.mouse").mousedown(function () { 
    $(this).css("background-color","pink");
  });
  $("p.mouse").mouseup(function () { 
    $(this).css("background-color","yellow");
  });

  // over -> 이벤트 버블 발생
  $(".outer").mouseover(function () {  
    console.log("Outer MouseOver Event");
  });

  $(".outer").mouseenter(function () { 
    console.log("Outer MouseEnter Event");
  });

  $(".inner").mouseover(function () {  
    console.log("Inner MouseOver Event");
  });

  $(".inner").mouseenter(function () { 
    console.log("Inner MouseEnter Event");
  });
  
});