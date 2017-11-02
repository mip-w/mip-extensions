/**
 * @file mobile-adapt
 * @author edwin
 */
define(function (require) {
    var docEl = document.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        }
        if (clientWidth >= 640) {
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        }
    };

    if (!document.addEventListener) {
        return;
    }
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
});
