$('.videolist').each(function(){ //遍历视频列表
$(this).hover(function(){ //鼠标移上来后显示播放按钮
	$(this).find('.videoed').show();
},function(){
	$(this).find('.videoed').hide();
	});
	$(this).click(function(){ //这个视频被点击后执行
				    
	var img = $(this).attr('vpath');//获取视频预览图
	var video = $(this).attr('ipath');//获取视频路径
	//$('.videos').html("<video id=\"video\" poster='"+img+"' style='width: 640px' src='"+video+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"close1()\" class=\"vclose\" src=\"img/gb.png\" width=\"25\" height=\"25\" >");
	$('.videos').html("<iframe  id=\"video\" poster='"+img+"' src='"+video+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\" allowfullscreen=\"true\" frameborder=\"0\" ></iframe><img onClick=\"close1()\" class=\"vclose\" src=\"img/gb.png\" width=\"30\" height=\"30\" >");
					
	$('.videos').show();
	});
		});
	function close1(){
		var v = document.getElementById('video');//获取视频节点
		$('.videos').hide();//点击关闭按钮关闭暂停视频
		v.pause();
		$('.videos').html();
	}