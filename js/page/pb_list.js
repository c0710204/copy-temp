
setTimeout(
work(
	'pb_topic',
	'squ1demo',
	function(){
		$('div#'+getArgs().id.toString()).addClass('ccpb');
		$('#topic').html(getArgs().id.toString());
		work(
			'pb_list/'+getArgs().id.toString(),
			'squ2demo',
			function(){
			$(document).ready(function(){
				$("span.eng").click(function(){
				    $(this).siblings("div.eng").slideToggle("slow");
					});
				$("span.chs").click(function(){
				    $(this).siblings("div.chs").slideToggle("slow");
					});
				});

			});

		
	})
	,1000);




