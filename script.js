$(document).ready(function(){
    $(".lt").html("<img src='Loading.svg' alt='Loading'>📋正在加载...");
    $.get("https://bilipeaches.github.io/body.html", function(date, status){
        alert(status)
        if(status == "success"){
            $(".html").html(date);
            $(".html").ready(function(){
                $(".loading").hide();
            });
        }
    });
});