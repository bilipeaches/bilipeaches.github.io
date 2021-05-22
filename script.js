$(document).ready(function(){
    $(".lt").html("<img src='Loading.svg' alt='Loading'>📋正在加载...");
    $.get("body.html", function(date, status){
        alert(status)
        if(status == "sucess"){
            $(".html").html(date);
            $(".html").ready(function(){
                $(".loading").hide();
            });
        }
    });
});