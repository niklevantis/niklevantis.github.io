		$(document).ready(function(){
				//hide images gt 0
				$(".half,.quarter").each(function(){
					$(this).find("img:gt(0),iframe").hide();
				});
				
				//open folio
				startPos = 0;
				$(".half,.quarter").click(function(){
					$("#cursor").hide();
					$(".fade").removeClass("fade");
					$(this).addClass("fade");
					if($("#openfolio").is(":hidden")){
						startPos = $(window).scrollTop();
						t = $(this);
						$("body").animate({
							"scrollTop":0
						},function(){
							$("#openfolio").html('<div id="folioTitle"></div><div id="folioImages"></div><div id="folioInfo"><div class="clear" /></div>');
							t.find(".title").contents().clone().appendTo($("#folioTitle"));
							$("#folioTitle").append("<a href='javascript:void()' id='closefolio'> (Close)</a>");
							t.find("img,iframe").clone().show().appendTo($("#folioImages"));
							iframeSize();
							$("#folioImages,#openfolio").append("<div class='clear' />");
							t.find(".info").contents().clone().appendTo($("#folioInfo"));
							$("#folioHold,#foliosList").stop().delay(500).slideToggle(500);
							
							$("#folioHold").find(".dontadd").hide();
							
							if(t.find(".col").length > 0) $("#folioInfo").addClass("fullCol");
							
							$("#closefolio").click(function(){
								$("#foliosList").slideToggle();
								$("#folioHold").stop().delay(200).slideToggle(500,function(){
									//$("body").delay(300).animate({
									//	"scrollTop":startPos+"px"
									//});
								});
								$(".fade").removeClass("fade");
							});
						});
					}else{
						t = $(this);
						$("body").animate({
							"scrollTop":0
						},function(){
							$("#folioHold").delay(100).slideToggle(800,function(){
								$("#openfolio").contents().remove();
								$("#openfolio").html('<div id="folioTitle"></div><div id="folioImages"></div><div id="folioInfo"><div class="clear" /></div>');
								t.find(".title").contents().clone().appendTo($("#folioTitle"));
								$("#folioTitle").append("<a href='javascript:void()' id='closefolio'> (Close)</a>");
								t.find("img,iframe").clone().show().appendTo($("#folioImages"));
								iframeSize();
								$("#folioImages,#openfolio").append("<div class='clear' />");
								t.find(".info").contents().clone().appendTo($("#folioInfo"));
								$("#folioHold").stop().delay(500).slideToggle(800);
								
								$("#folioHold").find(".dontadd").hide();
								
								if(t.find(".col").length > 0) $("#folioInfo").addClass("fullCol");
								
								$("#closefolio").click(function(){
									$("#foliosList").slideToggle();
									$("#folioHold").stop().delay(200).slideToggle(500,function(){
										//$("body").delay(300).animate({
										//	"scrollTop":startPos+"px"
										//});
									});
									$(".fade").removeClass("fade");
								});
							});
						});
					}
				});
				
				//cursor
				$(".half,.quarter").mousemove(function(e){
					if($(this).hasClass("dark")){
						$("#cursor").html("<span style='color:#fff'>open</span>");
						$("#cursor").css("left",e.pageX-($("#cursor").width()/2)+5+"px").css("top",e.pageY+20+"px").show();
					}else{
						$("#cursor").html("open");
						$("#cursor").css("left",e.pageX-($("#cursor").width()/2)+5+"px").css("top",e.pageY+20+"px").show();
					}
				});
				$(".half,.quarter").mouseleave(function(){
					$("#cursor").hide();
				});
				
			});
			
			//original menu functions
			$(".activate").click(function(){
				if($(".about").is(":visible") && $(this).attr("id") != "about"){
					t = $(this);
					$("#close").remove();
					$(".selected").removeClass("selected");
					$("body").animate({
						"scrollTop":0
					},500,function(){
						$("#folioHold, #foliosList").hide();
						$(".fade").removeClass("fade");
						$(".about").delay(300).fadeOut(function(){
							t.after("<a href='javascript:void(0)' id='close'> (Close) </a>");
							$("#close").click(function(){
								$(".selected").removeClass("selected");
								$(".folio,.about").fadeOut(function(){
									$("#folioHold,#foliosList").hide();
									$(".fade").removeClass("fade");
									$("#nav").delay(300).animate({
										"top":"50%"
									});
								});
								$("#close").remove();
							});
							id = t.attr("id");
							t.addClass("selected");
							$("."+id).delay(300).fadeIn();
						});
					});
				}else if($(".folio").is(":visible") && $(this).attr("id") != "folio"){
					t = $(this);
					$("#close").remove();
					$(".selected").removeClass("selected");
					$("body").animate({
						"scrollTop":0
					},500,function(){
						$(".folio").delay(300).fadeOut(function(){
							$("#folioHold, #foliosList").hide();
							$(".fade").removeClass("fade");
							t.after("<a href='javascript:void(0)' id='close'> (Close) </a>");
							$("#close").click(function(){
								$(".selected").removeClass("selected");
								$(".folio,.about").fadeOut(function(){
									$("#folioHold,#foliosList").hide();
									$(".fade").removeClass("fade");
									$("#nav").delay(300).animate({
										"top":"50%"
									});
								});
								$("#close").remove();
							});
							id = t.attr("id");
							t.addClass("selected");
							$("."+id).delay(300).fadeIn();
						});
					});
				}else{
					if($("#close").length <= 0){
						$(this).after("<a href='javascript:void(0)' id='close'> (Close) </a>");
						$("#close").click(function(){
							$(".selected").removeClass("selected");
							$(".folio,.about").fadeOut(function(){
								$("#folioHold,#foliosList").hide();
								$(".fade").removeClass("fade");
								$("#nav").delay(300).animate({
									"top":"50%"
								});
							});
							$("#close").remove();
						});
					}
					id = $(this).attr("id");
					$(this).addClass("selected");
					$("#nav").animate({
						"top":"45px"
					},function(){
						$("."+id).delay(300).fadeIn(function(){
						});
					});
				}
			});
			
			$(window).resize(function(){
				iframeSize();
			});
			function iframeSize(){
				$("#folioImages").find("iframe").each(function(){
					w = $(this).attr("width");
					h = $(this).attr("height");
					nw = ($(window).width()*.68) - (($(window).width()*.68)*.07);
					if(nw > 1088) nw = 1088;
					if($(window).width() < 650) nw = $(window).width() - ($(window).width()*.04);
					r = nw/w;
					nh = r*h;
					$(this).width(nw).height(nh);
				});
			}
