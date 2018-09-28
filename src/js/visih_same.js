var timer = null;
$(".btn").children().click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});
$(".btn").children().hover(function(){
	clearTimeout(timer);
	$('.dis').children().eq($(this).index()).addClass('active').siblings().removeClass('active');
},function(){
	timer = setTimeout(function(){
		$('.dis').children().removeClass('active');
		$('.dis').children().hover(function(){
			clearTimeout(timer);
		},function(){
			setTimeout(function(){
				$('.dis').children().removeClass('active');
			},300);
		});
	},300);
});

setInterval(function(){
	$('#middlecon').addClass('show');
},2000);
$('#middlecon>span').click(function(){
	$('#middlecon').addClass('hide');
	setTimeout(function(){
		$('#middlecon').addClass('show').removeClass('hide');
	},10000);
});
$('.mid_span1').click(function(){
	$('#middlecon').addClass('hide');
	setTimeout(function(){
		$('#middlecon').addClass('show').removeClass('hide');
	},10000);
});

$(document).scroll(function(){
	if($(this).scrollTop() > 300){
		$('.go_top').slideDown();
	}else{
		$('.go_top').slideUp();
	}
});
$('.go_top').click(function(){
	var timer1 = setInterval(function(){
		$(document).scrollTop()>0?scrollBy(0,-200):clearInterval(timer1);
	},30);
});
