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
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        1000:{
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 30
        },
        1600:{
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

const outSum = document.getElementById('out-sum');
const inputRange = document.getElementById('input-range');


inputRange.oninput = function(){
    let num = inputRange.value
    outSum.innerText = (num.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));
}