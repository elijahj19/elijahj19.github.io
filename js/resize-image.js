function resizeImages() {
    var cw = $('.img-fluid').width();
    $('.img-fluid').css({
        'height': cw + 'px'
    });
}
$(document).ready(() => {
    resizeImages();
});

$(window).on('resize', () => {
    resizeImages();
});

$('.img-fluid').load(function() {
    $(this).data('height', this.height);
}).bind('mouseenter mouseleave', function(e) {
    $(this).stop().animate({
        height: $(this).data('height') * (e.type === 'mouseenter' ? 1.5 : 1)
    });
});