$(document).ready(function(){
let btn = $('#btn')
let div = $('#content')
let ul = $('#ul')
let finish = false

btn.on('click', function () {
  if (finish == false) {
    $.ajax({
      type: "GET",
      url: "./ajax.php",
      success: function (data) {
        data = JSON.parse(data)
        for (var key in data) {
          ul.append(`<li>${data[key]}</li>`)
        }
      }
    })
    finish = true
  } 
})


 
})



