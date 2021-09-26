$(document).ready(function(){
  let div = $('#content');
  let btn1 = $('#btn1');
  let btn2 = $('#btn2');
  let btn3 = $('#btn3');

  let input = $("#input-field");

  btn1.on('click', function (){
    $.ajax({
      url: "ajax.php",
      type: "GET",
      data: "n=1",
      success: function(data){
        input.text(data);
      }
    });
  })
  btn2.on('click', function (){
    $.ajax({
      url: "ajax.php",
      type: "GET",
      data: "n=2",
      success: function(data){
        input.text(data);
      }
    });
  })
  btn3.on('click', function (){
    $.ajax({
      url: "ajax.php",
      type: "GET",
      data: "n=3",
      success: function(data){
        input.text(data);
      }
    });
  })
})



