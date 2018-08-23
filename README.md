# ArtaraxRatingStar
a jQuery plugin for star rating


## How to use
just add the plugin into your page and use it like this :

```$(function () {
    var artaraxRatingStar = $.artaraxRatingStar({
        onClickCallBack: onRatingStar
    });

    function onRatingStar(rate, id) {
        alert("data-val(rate)=" + rate + " data-id(ProductId)=" + id);
    }

});```

#### For more information, please see the source, it has a demo file (index.html)
