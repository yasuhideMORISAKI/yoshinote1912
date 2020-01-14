$(function () {
  $('.tab > li').click(function() {
    var index = $('.tab > li').index(this);
    $('.tabContent > li').removeClass('current');
    $('.tabContent > li').eq(index).addClass('current')
    $('.tab > li').removeClass('current');
    $(this).addClass('current')
  });
});