$(function() {
  // $("input").focus(function () { 
  //   $(this).css("background-color","plum")
  // });
  // $("input").blur(function (e) { 
  //   e.preventDefault();
  //   $(this).css("background-color","greenyellow")
  // });

  $("input[type = 'password']").focus(function () { 
    $(this).css("background-color","plum")
  });
  $("input[type = 'password']").blur(function (e) { 
    e.preventDefault(); 
    $(this).css("background-color","")
  });

  $("h1").on({
    click      : function() {$(this).css("background-color","plum")},
    mouseenter : function() {$(this).css("background-color","greenyellow")},
    mouseleave : function() {$(this).css("background-color","powderblue")}
  });
  
});