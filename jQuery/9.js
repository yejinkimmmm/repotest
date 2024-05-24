$(function() {
  $("#btnCall").on("click", function() {
    $("p").hide('slow', function() {
      // alert("사라진당");
      $("p").show('slow');
    });
  });

  $("#chain").on("click", function () {
    $("p").css("color", "plum")
    .slideUp(1000).slideDown(1000)
  });


  // $(".btn").on("click", function () {
  //   $(".anyBox").animate({left:'100px', top:'100px', fontSize : '2rem'},
  //    'slow', function() {
  //     $(this).css("background-color","plum")
  //   });
  // });

});