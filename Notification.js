/*jshint strict:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, nonew:true, browser:true, devel:true, indent:2, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, maxparams:3, maxerr:100, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($,undefined){
  "use strict";
  var
    ie = (navigator.appVersion.indexOf("MSIE") !== -1) ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 99,
    body = $("body"),
    markup = "",
    notificationHolder = $("div#notificationHolder"),
    abas = "abas";

  console.log(ie);
  $.fn.notification = function(opt){
    var
      $this = $(this),
      $notification = null,
      data = $.extend({
        type          : 'alert',
        message       : '',
        theme         : 'default',
        pos           : 'left',
        timeout       : 3000,
        animationDue  : 400,
        effect        : 'default',
        autoHide      : true,
        callBack      : null
      },opt),
      postBackAnim = function(){
       $notification
       .animate({
         'left' : -$notification.width()
       },data.animationDue,callBackRun);
      },
      callBackRun = function(){
        if(data.callBack !== null){
          data.callBack();
        }
      },
      abas2 = "abas2";

    //Add holder if it doesnt exist yet
    if(!notificationHolder.length){
      $("body").append("<div id='notificationHolder'></div>");
      notificationHolder = $('div#notificationHolder');
      console.log();
      if(data.pos === 'left'){
       notificationHolder.css('bottom','25%')
       notificationHolder.css('left','0');
      }
      else if(data.pos === 'right'){
       notificationHolder.css('bottom','25%')
       notificationHolder.css('right','0');
      }
      else if(data.pos === 'top'){
       notificationHolder.css('top','0')
       notificationHolder.css('left','30%');
      }
      else if(data.pos === 'bottom'){
       notificationHolder.css('bottom','0')
       notificationHolder.css('left','30%');
      }
    }

    markup = [
     '<div id="notification" class="' + data.type + ' ' + data.theme + '">',
     '<div class="notifyIcon"></div>',
     '<p class="message">' + data.message + '</p></div>'
    ].join('');

    $notification = $(markup).appendTo(notificationHolder);
    console.log($notification,$notification.width());

    $notification
    .css("left",-$notification.width())
    .animate({
     'left' : 0
    },data.animationDue);

    if(!data.autoHide){
     $notification.click(function(){
      postBackAnim();
     });
    }
    else{
      setTimeout(postBackAnim,data.timeout);
    }

  };
})(window.Zepto || window.jQuery);