$(function() {
  $("#btnMenu").on({
    click : function() {
      // $(".divMenu").slideDown('slow');
      $(".divMenu").slideToggle('slow');
    }
  });
});