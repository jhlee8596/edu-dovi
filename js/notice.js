$(function () {
    $('.faq01 dl dt').first().next().show();
    $('.faq02 dl dt').first().next().show();
    $('.faq03 dl dt').first().next().show();
    $('.faq04 dl dt').first().next().show();

    $('.faq01 dl dt').first().find('i.fas').stop().addClass('icon_act');
    $('.faq02 dl dt').first().find('i.fas').stop().addClass('icon_act');
    $('.faq03 dl dt').first().find('i.fas').stop().addClass('icon_act');
    $('.faq04 dl dt').first().find('i.fas').stop().addClass('icon_act');

    $('.faq01 dt').click(function () {

      $(this).find('i.fas').stop().toggleClass('icon_act').parent().siblings().find('i.fas').removeClass('icon_act');

      $(this).next().stop().slideToggle().siblings('.faq01 dd').slideUp();

    });

    $('.faq02 dt').click(function () {

      $(this).find('i.fas').stop().toggleClass('icon_act').parent().siblings().find('i.fas').removeClass('icon_act');

      $(this).next().stop().slideToggle().siblings('.faq02 dd').slideUp();

    });

    $('.faq03 dt').click(function () {

      $(this).find('i.fas').stop().toggleClass('icon_act').parent().siblings().find('i.fas').removeClass('icon_act');

      $(this).next().stop().slideToggle().siblings('.faq03 dd').slideUp();

    });

    $('.faq04 dt').click(function () {

      $(this).find('i.fas').stop().toggleClass('icon_act').parent().siblings().find('i.fas').removeClass('icon_act');

      $(this).next().stop().slideToggle().siblings('.faq04 dd').slideUp();

    });
});