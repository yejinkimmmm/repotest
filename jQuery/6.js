$(function () {
  $("#tot").on({
    click : function() {$(this).hide('fast')}
  });

  $("#btnShow").on({
    click : function() {$("#tot").show(2000,
      function() {
        $("#tot").hide('slow'); 
      }
    )}
  });
  
});