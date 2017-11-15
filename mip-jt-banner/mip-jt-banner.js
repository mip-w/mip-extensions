/**
 * @file mip-jt-banner 金投网头部banner
 * @author jt
 */
define(function (require) {

    var $ = require('zepto');

    var loadJs = function (elem, url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        $(elem).append(script);
        if (typeof callback !== 'function') {
            return false;
        }
        else {
            script.onload = function () {
                callback();
            };
        }
    };

    var customElement = require('customElement').create();

    customElement.prototype.build = function () {
        loadJs(this.element, 'https://res.cngoldres.com/mobile/cngold/js/mip-jt-banner.js');
    };
    customElement.prototype.firstInviewCallback = function () {

    };
    return customElement;
});
