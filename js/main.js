$(document).ready(function(){
   tab();
});

function tab() {
   $(".record__block").not(":first").hide();
   $(".switcher .switcher__item").click(function() {
      $(".switcher .switcher__item").removeClass("switcher__item_active").eq($(this).index()).addClass("switcher__item_active");
      $(".record__block").hide().eq($(this).index()).fadeIn();
   });
}

const start = datepicker('.header-form__input_start', { id: 1 })
const end = datepicker('.header-form__input_end', { id: 1 })