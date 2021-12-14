
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
    },
    ready:function(){
        $("body").css("overflow","auto")
    },
    methods:{
        open(){
            $("body").css("overflow","hidden"),
            $("nav").css("display","none")
    },
        close(){
            $("body").css("overflow","auto"),
            $("nav").css("display","block")
}
}});
