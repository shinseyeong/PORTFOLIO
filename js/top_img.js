$(document).ready(function () {

    var html = '';
    for (var i = 1; i <= 50; i++) {
        html += '<div class="shape-container--' + i + ' shape-animation"><div class="random-shape"></div></div>';
    }

    document.querySelector('.shape').innerHTML += html;

    var $allShapes = $("[class*='shape-container--']");
    $('.shape .button a').click(function (event) {
        $allShapes.toggleClass("stop-shape");
        var $this = $(this);
        $this.toggleClass('.shape .button a');
        if ($this.hasClass('.shape .button a')) {
            $this.text('POTOPOLIO');
        } else {
            $this.text('START');
            
            
        }
        event.preventDefault();
    });

});

