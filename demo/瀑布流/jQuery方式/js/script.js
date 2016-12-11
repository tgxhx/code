/**
 * Created by 12 on 11/8 0008.
 */
$(window).on('load', function () {
    waterfall();
    var dataInt = {"data": [{"src": "60.jpg"}, {"src": "61.jpg"}, {"src": "62.jpg"}, {"src": "63.jpg"}, {"src": "64.jpg"}, {"src": "65.jpg"}]};
    $(window).on('scroll', function () {
        if (checkScrollSlide()) {
            $.each(dataInt.data, function (key, value) {
                var oBox = $("<div>").addClass("box").appendTo($("#main"));
                var oPic = $("<div>").addClass("pic").appendTo($(oBox));
                var oImg = $("<img>").attr("src", "images/" + $(value).attr("src")).appendTo($(oPic));

                // console.log($(value).attr("src"));
            })
            waterfall();
        }

    })
})

function waterfall() {
    var $boxs = $("#main>div");
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width() / w);
    $("#main").width(w * cols).css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function (index, value) {
        // console.log(value);
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHIndex = $.inArray(minH, hArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            })
            hArr[minHIndex] += $boxs.eq(index).outerHeight();
        }
    })
}

function checkScrollSlide() {
    var $lastBox = $("#main>div").last();
    var lastBOxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBOxDis < scrollTop + documentH) ? true : false;
}