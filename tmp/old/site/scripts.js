var cur_post = 0;
var first = true;
var image_width = 1020;
var menu_width = 200;
var showing_thumbs = false;

$(window).resize(function(e) {
  if($(".thumbnails").height() < $(window).height()) {
    $(".thumbnails").css("height", $(window).height());
  }
  $(".thumbnails").animate({ "margin-top":-($(".thumbnails").height() + 20) }, 0);
  checkPositions(false);
});

function loadPic(which) {
  var i = $(".post:nth-child("+(which)+") img");
  if(i.attr("source") && i.attr("source").length) {
    i.attr("src", i.attr("source"));
    i.attr("source","");
  }
}

function checkPositions(animate) {
  
  if($(".post").length == 0) {
    return;
  }
  
  if(cur_post > -1) {
    loadPic(cur_post+1);
    loadPic(cur_post+2);
  }
  
  if(animate) {
    $(".explination").fadeOut();
    hideThumbs();
  }
  
  $(".post").each(function(i,e) {
    $(e).animate({"left":(i-cur_post) * image_width}, animate ? 200 : 0);
  });
  if(cur_post >= $(".post").length) {
    $(".post").each(function(i,e) {
      $(e).animate({"left":(i+1) * image_width}, 0);
    });
    cur_post = 0;
    checkPositions(animate);
  }
  if(cur_post < 0) {
    $(".post").each(function(i,e) {
      $(e).animate({"left":(i-$(".post").length - 1) * image_width}, 0);
    });
    cur_post = $(".post").length - 1;
    checkPositions(animate);
  }
  $(".count").text((cur_post + 1) + " / " + $(".post").length);
  
  var local = window.location.pathname + "#" + (cur_post + 1);
  if(window.location.href.indexOf(local) == -1 && $(".post").length > 1) {
    window.history.pushState({}, "Title", local);
  }
  
  var post = $(".post:nth-child("+parseInt(cur_post+1)+")");
  var height = post.position().top + post.height();
  var max_height = $(window).height() - (parseInt($(".posts").css("margin-top")) + parseInt($(".posts").css("margin-bottom")));

  if(height > max_height) {
    height = parseInt(max_height);
  }
  if(height < $(window).height()) {
    height = $(window).height();
  }
  
  var max_global_width = image_width + ($("#header").width() + parseInt($("#header").css("margin-left"))) + 30;
  var max_global_height = post.hasClass("Text") ? "auto" : $(window).height();
  if(!showing_thumbs) {
    $(".global").css({"width":$(window).width()<max_global_width?$(window).width():max_global_width, "height":max_global_height, "overflow":"hidden"});
  }
  
  var menu_width = ($("#header").width() + parseInt($("#header").css("margin-left")) + 30);
  var max_width = $(window).width() - menu_width;
  if(max_width > image_width) {
    max_width = image_width;
  }
  
  if(post.hasClass("Text")) {
    $(".posts").removeClass("hidden");
    var h = post.height() > 0 ? post.height() : $(".posts").height();
    $(".meta").css({ "width": max_width });  
    $(".posts").animate({ "height": h + (parseInt($(".posts").css("margin-top")) + parseInt($(".posts").css("margin-bottom"))) }, 0);
  }else{
    $(".posts").animate({ "height": height }, 0);
  }
  
  $(".posts").animate({ "width": max_width }, 0);
  
  $(".post").each(function(i,el) {

    var extra_height = parseInt($(el).children("div.meta").height()) + 10;
    
    // videos
    var video = $(el).find("iframe");
    if(video.length) {
      var voh = parseInt(video.attr("oh"));
      var vow = parseInt(video.attr("ow"));
      if(!voh) {
          voh = 1080;
          vow = 1920;
      }
      var original_width = parseInt(video.attr("maxwidth"));
      var new_width = max_width;
      var new_height = (voh * max_width) / vow;
      if(new_height > max_height - extra_height) {
        new_height = max_height - extra_height;
        new_width = (vow * new_height) / voh;
      }
      // if(new_width > original_width) {
      //   new_width = original_width;
      //   new_height = (voh * new_width) / vow;
      // }
      video.css({ "width": new_width, "height": new_height });  
    }
    
    // images
    var img = $(el).find("img");
    if(img.length) {
      var oh = img.attr("oh");
      var ow = img.attr("ow");
      var proposed_height = max_height - extra_height;
      
      var new_height = proposed_height < oh ? proposed_height : oh;
      var new_width = new_height * ow / oh;
      
      img.css({ "height": new_height, "width": new_width });
      
      if(new_width > max_width) {
        img.css({ "width": max_width, "height":"auto" });
      }
    }
    
  });

  first = false;
  
  $(".posts").removeClass("hidden");
  if($(".posts").hasClass("start_with_thumbs")) {
    if(cur_post == 0){
      showThumbs(0);
    }
    $(".posts").removeClass("start_with_thumbs");
  }
}

$(".thumbs").live("click", function() {
  showThumbs(200);
});

function showThumbs(duration) {
  
  if(showing_thumbs) return;
  showing_thumbs = true;
  
  var thumbs = $(".thumbnails");
  thumbs.css("left", $(".posts").position().left);
  thumbs.css("width", $(".posts").width());
  thumbs.css("height", "auto");
  if(thumbs.height() < $(window).height()) {
    thumbs.css("height", $(window).height());
  }
  var thumb_width = (thumbs.width() - 100) / 5;
  $(".thumb").css("width", thumb_width);
  $(".thumb").each(function(i, el) {
    var img = $(el).children("img");
    var new_height = ($(img).attr("oh") * thumb_width) / $(img).attr("ow");
    var offset = (new_height - $(el).height())*.5;
    $(".thumb").css("height", new_height);
    //$(el).children("img").css("margin-top", -offset);
  });
  thumbs.css("margin-top", -thumbs.height());
  thumbs.animate({"margin-top":0}, duration);
  thumbs.css("height","auto");
  var h = thumbs.height();
  var ideal_height = h + 20;
  if(ideal_height < $(window).height()) ideal_height = $(window).height();
  $(".global").css("height", ideal_height);
  thumbs.css("height", ideal_height);
}

function hideThumbs() {
  if(!showing_thumbs) return;
  showing_thumbs = false;
  if($(".thumbnails").css("margin-top") == "0px")
  $(".thumbnails").animate({ "margin-top":-($(".thumbnails").height() + 20) }, 200);
  $(".global").css("height", $(window).height());
}

$(".thumb").live("click", function(e) {
  cur_post = $(e.currentTarget).index();
  checkPositions(false);
  hideThumbs();
});

$(".li a").live("click", function(e) {
  if($(e.target).siblings(".level-two").find("ul li").length && $(e.target).parent().hasClass("li") && $(e.target).siblings(".level-two").html().indexOf("{") == -1) {
    e.preventDefault();
    if(parseInt($(e.target).siblings(".level-two").css("height")) > 0) {
      $(e.target).siblings(".level-two").css({"height":"0px"});
    }else{
      $(e.target).siblings(".level-two").css({"height":"auto"});
    }
  }
});

$(document).ready(function(e) {
  if($(".post").length < 2) {
    $(".thumbs").remove();
    $(".arrows").remove();
    checkPositions();
    checkPositions(false);
    return;
  }else{
    $(".left_arrow").live("click", function(e) {
      e.preventDefault();
      cur_post--;
      checkPositions(true);
    });

    $(".right_arrow, .post img").live("click", function(e) {
      e.preventDefault();
      cur_post++;
      checkPositions(true);
    });
  }
  if(window.location.hash) {
    cur_post = parseInt(window.location.hash.substr(1)) - 1;
  }
  checkPositions();
  $("img").load(function(e) {
    checkPositions();
  });
});

$(document).keydown(function(e) {
  if(e.keyCode == 37 && !e.metaKey) {
    $(".left_arrow").click();
  }else if(e.keyCode == 38 && !e.metaKey) {
    hideThumbs();
  }else if(e.keyCode == 39 && !e.metaKey) {
    $(".right_arrow").click();
  }else if(e.keyCode == 40 && !e.metaKey) {
    $(".thumbs").click();
  }
});
