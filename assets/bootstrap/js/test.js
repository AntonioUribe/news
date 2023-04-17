$(document).ready(function () {
    $("input[type='radio']").on('change', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});

