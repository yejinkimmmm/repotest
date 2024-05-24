$(function() {
  // $("#a").fadeIn();
  $("#btnFade").on({
    click : function() {
      $("#a").fadeIn(1000);
      $("#b").fadeIn('slow', function(){
        alert("하잉ヽ(✿ﾟ▽ﾟ)ノ")
      });
      $("#c").fadeIn('fast');
    }
  })

  $("#btnFadeToggle").on({
    click : function() {
      $("#a").fadeToggle();
    }
  })

  $("#btnFadeTo").on({
    click : function() {
      $("#a").fadeTo('3000', 0);
    }
  })

});
