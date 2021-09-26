$(document).ready(function(){

  let items = $('.items')
  let finish = 0;
  $(document).on('scroll', function() { 
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    let scrolled = window.pageYOffset + window.innerHeight;
    
    if (scrollHeight <= scrolled) {
      if (finish == 0) {
        code()
        finish = 1
      } else if (finish == 1) {
        items.append("<h2>элементы закончились</h2>")
        finish = 2
      }
    }

  })

  

function code () {
  $.ajax({
    url: './ajax.php',
    type: "GET",
    success: function(data) {
      // items.append(data)
      data = JSON.parse(data)
      // console.log(data)
      for (var key in data) {
        let el = `<div class="item">${data[key]}</div>`
        items.append(el)
      }
    }
  })
}

 
})



