$(document).ready(function() {

    $(".range__input").each(function(i, elem) {
        val = $(this).val();
        min = $(this).attr('min');
        max = $(this).attr('max');
        step = $(this).attr('step');
        position = 100 / (max - step) * (val - step);
        $(this).parent().find('.range__track').width(position + "%");
        $(this).parent().parent().find(".range-num").text(val);
    });
    $(".range__input").on('input', function() {
        val = $(this).val();
        min = $(this).attr('min');
        max = $(this).attr('max');
        step = $(this).attr('step');
        position = 100 / (max - step) * (val - step);
        $(this).parent().find('.range__track').width(position + "%");
        $(this).parent().parent().find(".range-num").text(val);
    });

    $(window).load(windowSize);
    $(window).resize(windowSize);

});
(jQuery);

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });