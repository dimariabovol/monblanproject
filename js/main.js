$(document).ready(function(){
   tab();
});

function tab() {
   $(".tab__info").not(":first").hide();
   $(".tab .tab__item").click(function() {
      $(".tab .tab__item").removeClass("tab__item_active").eq($(this).index()).addClass("tab__item_active");
      $(".tab__info").hide().eq($(this).index()).fadeIn();
   });
}