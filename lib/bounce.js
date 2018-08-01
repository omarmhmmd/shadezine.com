//jquery.DVDBounce.js
  $.fn.DVDBounce = function(options) {

   var defaults = {
    inc  : 1,
    debug: false
   };
   var options = $.extend(defaults, options);
     var inc = options.inc;
     var debug = options.debug;
     var imageIDs = [];
     var width = 0;
     var height = 0;
     curImg = 0;
     var Xdir = 3;
     var Ydir = 1;
   return this.each(function() {
       var div = $(this);
       div.css("position","absolute")
       div.children().each(function(index, cur) {
           // var id = "DVDBounce"+index;
           // imageIDs.push(id);
           // $(cur).attr("class", "DVDBounceImg").attr("id", id).load(function() {
           //        width = $(this).width() > width ? $(this).width() : width;
           //        height = $(this).height() > height ? $(this).height() : height;
           //        div.css("width",width).css("height",height).css("margin","0px");
           //     });
           // $(cur).hide();
       });

       // function changeImage(){
       //     $(".DVDBounceImg").hide();
       //     $("#"+imageIDs[curImg]).show();
       //       curImg = (curImg +1) % imageIDs.length;
       // }
       // changeImage();
       // div.css("width",width);
       // div.css("height",height);

       if ( debug ) {
           // console.log(width+","+height);
       }
       move = setInterval(function(){
           pos = div.offset();
           x = pos.left;
           y = pos.top;
           a = x + div.outerWidth();
           b = y + div.outerHeight();

           winW = $(window).width();
           winH = $(window).height();

           if(Xdir == 1){
               x+= inc;
               a+= inc;
               if(a+width >= (winW-inc)){
                   // console.log("RIGHT")
                   // console.log(a+width);
                   // console.log(winW-inc);

                   // changeImage();
                   Xdir = 0;
               }
           }
           else{
               x -= inc;
                 if(x <= inc){
                   // console.log("LEFT")
                   // console.log(x);
                   // console.log(inc);
                     // changeImage();
                     Xdir = 1;
                 }
           }

           if(Ydir == 1){
               y+= inc;
               b+= inc;
               if(b+height >= (winH-inc+55)){
                   // changeImage();
                   // console.log("BOTTOM")
                   // console.log(b+height);
                   // console.log(winH-inc);
                   Ydir = 0;
               }
           }
           else{
               y -= inc;
                 if(y <= inc){
                   // console.log("TOP")
                   // console.log(y);
                   // console.log(inc);
                     // changeImage();
                     Ydir = 1;
                 }
           }

           if ( debug ) {
               // console.log("window:"+winW+","+winH);
               // console.log("box:"+(x+width)+","+(y+height));
           }
          div.offset({left:x, top:y});
       },10);

   });
  };
