$(function () {
  $("#null").on("click", function () {
    $("#display1").load("./outer.txt");
  });

  $("#loadData").on("click", function () {
    $("#display1").load("./news.html #first");
    $("#display2").load("./news.html #second");
    $("#display3").load("./news.html .third");
  });

  // $("#post").on("click", function() {
  //   $("#display1").load("./news.html",
  //     {
  //       "name" : "손흥민",
  //       "age" : 31
  //     }, function(responsText, statusTtext, xhr) {
  //       if(statusTtext == 'error') {
  //         alert("오류발생!!!")
  //       }
  //       console.log(xhr.statusTtext);
  //     }
  //   );
  // });
  $("#post").on("click", function() {
    $("#display1").load("./news.html", function(responsText, statusTtext, xhr) {
        if(statusTtext == 'error') {
          alert("요청하신 페이지가 없습니다")
        } else {
          alert("정상처리 되었습니다")
        }
        console.log(xhr.statusTtext);
      }
    );
  });
});