$(function(){
  //something here
  $("button").click(function(){
    if($(this).attr('id')==="snake"){
      $(".snake").show();
    } else if ($(this).attr('id')==="insect"){
      $(".insect").show();
    } else {
      $(".turtle").show();
    }
  });
});
