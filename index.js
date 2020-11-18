$(".social-icon").append("<span>@nathanf</span>");
$("span").addClass("span-class");
$(".up").removeClass("span-class");
$(".down").removeClass("span-class");
$(".switch input").change(function(e) { 
        console.log(e.currentTarget.checked);
        if (!e.currentTarget.checked) {
            $("body").removeClass("main");
            $("#tops").removeClass("top");
            $("body").addClass("light");
            $("#tops").addClass("top-light");
            $(".toggle-text").text("I love you bubu ❣")
            $(".card").removeClass("whot");
            $(".card").addClass("card-light")
             $(".card").mouseover(function(){
    if ($(this).hasClass("card-light")){
        $(this).removeClass("card-light");
        $(this).addClass("card-light-hover");
    }
    });
    $(".card").mouseout(function(){
    if($(this).hasClass("card-light-hover")){
        $(this).removeClass("card-light-hover");
        $(this).addClass("card-light");
    }
    });
        } else {
            $("body").removeClass("light");
            $("#tops").removeClass("top-light");
            $("body").addClass("main");
            $("#tops").addClass("top");
            $(".toggle-text").text("You cute af🌚")
            $(".card").removeClass("card-light");
            $(".card").addClass("whot")

        }


});
    if($("body").hasClass("main")){
    $(".card").mouseover(function() {
  if ($(this).hasClass("whot")) {
    $(this).removeClass("whot");
    $(this).addClass("whot-hover");
  }
});
$(".card").mouseout(function(){
    if ($(this).hasClass("whot-hover")){
        $(this).removeClass("whot-hover");
        $(this).addClass("whot");
    }
});

}