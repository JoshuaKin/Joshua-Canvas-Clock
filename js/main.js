var spans = $('.wrap .num');
for (var i = 0; i < spans.length; i++) {
    var r = 230;
    var deg = i * Math.PI / 6;
    var tmpX = r * Math.sin(deg) + 'px';
    var tmpY = -r * Math.cos(deg) + 'px';
    spans[i].style.transform = 'translateY(' + tmpY + ') translateX(' + tmpX + ')';
}
var draw = function(s, m, h) {
    var sec = {
        hand: document.getElementById('secHand'),
        deg: s * 360 / 60 + 'deg'
    };
    var min = {
        hand: document.getElementById('minHand'),
        deg: m * 360 / 60 + s * 6 / 60 + 'deg'
    };
    var hour = {
        hand: document.getElementById('hourHand'),
        deg: h * 360 / 12 + m * 30 / 60 + s * 0.5 / 60 + 'deg'
    };
    sec.hand.style.transform = 'rotateZ(' + sec.deg + ')';
    min.hand.style.transform = 'rotateZ(' + min.deg + ')';
    hour.hand.style.transform = 'rotateZ(' + hour.deg + ')';
}
var loop = function() {
    var nowDate = new Date();
    var sec = nowDate.getSeconds();
    var hour = nowDate.getHours();
    var min = nowDate.getMinutes();
    var date = nowDate.getDate();
    $('#date').html(date);
    draw(sec, min, hour);
}
loop();
setInterval(loop, 30);
