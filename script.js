$(document).ready(function(){
    $(".lt").html("<img src='Loading.svg' alt='Loading'>📋正在加载...");
    $(".html").load("body.html");
    $(".html").ready(function(){
        $(".loading").hide();
    });
});