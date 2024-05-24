$(function() {
  // text(), html()
  $("#btnGet").on("click", function () {
    alert($("#message").text());
    alert($("#message").html());
  });

  // val()
  $("#getName").on("click", function (){
    alert($("#name").val());
    // alert(document.querySelector('name').value);  
    // 같은 내용인데 jQuery 코드가 더 간단함
  });

  // attr()
  $("#attrTest").on("click", function () {
    // href 속성값을 변수 daumUrl로 가져오기
    const daumUrl = $("#daum").attr('href');
    const aTagText = $("#daum").text(); // --> '다음 페이지로 이동' 을 가져옴
    // input 상자에 넣기
    $("#getDaumUrl").val(daumUrl);
  });

  $("#btnSet").on("click", function () {
    const name = '<b>' + $("#name").val() + ' </b>';
    $("#idolName").html(name);
  });

  $("#btnIve").on("click", function () {
    $("#ive").text(function(i, originText){
      return "안녕하세요 " + originText + " 입니다 💖 (" + i + ")"
    });
  });

   $("#btnGirlgroup").on("click", function () {
    $(".girlGroup").text(function(i, originText) {
      return "안녕하세요 " + originText + " 입니다 🤗 (" + i + ")"
    })
   });
   
   $("#btnChange").on("click", function () {
    $("#site").attr('href','https://naver.com').text('네이버');
   })

});