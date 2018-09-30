jQuery(document).ready(function(){
  $('.logout-btn').click(function(event){
    event.stopPropagation()
    $.get("/sign/logout", function(result){
      if(result.code === 3){
        alert(result.mes)
        window.location.href = 'sign'
      }else{
        alert(result.mes)
      }
    })
  })
})
