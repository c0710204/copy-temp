GET = new Array();
GET;
$(document).ready(function () {
    $("#nav-one li").hover(
        function () {
            $("ul", this).fadeIn("fast");
        },
        function () {}
    );
    if (document.all) {
        $("#nav-one li").hoverClass("sfHover");
    }
});
//******************************
function getArgs() {
    var args = {};
    var match = null;
    var search = decodeURIComponent(location.search.substring(1));
    var reg = /(?:([^&amp;]+)=([^&amp;]+))/g;
    while ((match = reg.exec(search)) !== null) {
        args[match[1]] = match[2];
    }
    return args;

}
//************************
$.fn.hoverClass = function (c) {
    return this.each(function () {
        $(this).hover(
            function () {
                $(this).addClass(c);
            },
            function () {
                $(this).removeClass(c);
            }
        );
    });
};
//***********************************


function killerrors() {
    return true;
}
window.onerror = killerrors;


function loader(str) {
    var query = str.split("/");
    var temp = query[0].split("_");
    $('#loadfromjs').load("/" + query[0] + ".html", function () {


        $('.ah' + self).removeClass("select");
        $('.ah' + temp[0]).addClass("select");
        $('.banner').removeClass('cc' + self);
        $('.banner').addClass('cc' + temp[0]);
        var banner_img = document.getElementById('banner_img')
        banner_img.src = '/img/banner_' + temp[0] + '.png';
        self = temp[0];
        $.getScript("/js/page/" + query[0] + ".js");
    });

};

function loadrow(place, input, demo) {
    var row = $('#squtemp #' + demo).clone();
    row.attr("id", "rowtemp");
    row.removeClass("hidden");
    $('#squtemp #' + place).before(row);
    strhtml = $('#squtemp #rowtemp').html();

    for (var attr in input) {

        //$('#rowtemp #'+attr).html(input.htmls[attr]);
        var strev = "strhtml=strhtml.replace(/\\$" + attr + "\\#/g,input[attr]);";
        //alert(strev);
        //strhtml=strhtml.replace('$'+attr+'#',input[attr]);
        eval(strev);
    }
    $('#squtemp #rowtemp').html(strhtml);
    $('#squtemp #rowtemp').attr("id", "row");
}

function loadsqu(place, input, demo) {
    var squ = $('#' + demo).clone();
    squ.attr("id", "squtemp");
    squ.removeClass("hidden");
    $('#' + place).before(squ);
    strhtml = $('#squtemp').html();
    for (var attr in input.attr) {

        //$('#rowtemp #'+attr).html(input.htmls[attr]);
        var strev = "strhtml=strhtml.replace(/\\$" + attr + "\\#/g,input.attr[attr]);";
        //strhtml=strhtml.replace('$'+attr+'#',input.attr[attr]);
        eval(strev);
        //`(attr+'|'+input[attr]);
    }
    $('#squtemp').html(strhtml);
    for (attr in input.rows) {
        loadrow(input.demo, input.rows[attr], input.demo);
    }
    $('#squtemp').attr("id", "squ");
    $('#' + input.demo).addClass('hidden')
    $('#' + input.demo).attr("id", "rowdemoused");
}

function work(json, main) {
    if (!(arguments[1])) main = 'squ1demo';
    //	var data='[{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]},{"demo":"row1demo",	"rows":[{"attr1":"a"},{"attr1":"b"}]}]';
    data = $.getJSON("/js/data/" + json + ".json", function (data) {

        for (var squrow in data) {
            loadsqu(main, data[squrow], main);
        }
    });
    // var data = eval('(' + data + ')');
}
$(document).ready(function () {
    var urls = getArgs();
    if (!(urls['f'])) {
        urls['f'] = 'abt'
    };
    self = urls['f'];
    loader(urls['f']);
});
