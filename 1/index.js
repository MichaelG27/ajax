$(document).ready(function(){
  let div = $('#content');
  let btn = $('#btn');
  let input = $("#input-field");

  btn.on('click', function (){
    $.ajax({
      url: "ajax.php",
      success: function(data){
        input.text(data);
      }
    });
  })
})



