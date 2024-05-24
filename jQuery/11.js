$(function () {
  $("#btnAppend").on("click", function () {
    $("p").append(' (｡･∀･)ﾉﾞ') //prepend 면 앞에 붙음
  });

  $("#btnItemAppend").on("click", function () {
    $("ul").append('<li>네번째 아이템</li>'); 
  });

  $("#btnItemPrepend").on("click", function () {
    $("ol").prepend('<li>영번째 아이템</li>'); 
  });
  $("#imgAdd").on("click", function () {
    const leftImage = $("<img></img>").attr("src","./left.jpg")
    const rightImage = $("<img></img>").attr("src","./right.jpg");
    $("img").before(leftImage).after(rightImage);
  });

  $("#delete").on("click", function () {
    $("p").remove(".black"); // remove -> 나 + 아래 empty -> 아래만
  });
  
});