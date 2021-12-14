
$(document).on('click','li>a',function(event){
    event.preventDefault();
    var target=$(this).attr("href");
    $('html,body').animate({
        scrollTop:$(target).offset().top
    },800);
});

var vm = new Vue({
    el:"#app",
    data:{
        tainanParkOpen : false,
        csmcOpen : false,
        skinOpen : false,
        mapOpen : false,
        haveOpen : false,
    }});


var s=skrollr.init();
