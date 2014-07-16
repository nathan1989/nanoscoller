/*!Uses the nanoScrollerJS plugin
* nanoScrollerJS - v0.7.2
* http://jamesflorentino.github.com/nanoScrollerJS/
* Copyright (c) 2013 James Florentino; Licensed MIT */

$.fn.initNanoScroller = function() {

	var $scrollBody = $(this),
		$scrollList = $scrollBody.children(),
		$listChildren = $scrollList.children(),
		totalHeight = 0,
		$newArticleButton = $('<a href="#" class="newArticleButton">Back to top</a>');

	$scrollBody.addClass('nano');
	$scrollList.addClass('content');

	var $nano = $('.nano');

	$listChildren.each(function(){
		totalHeight += $(this).outerHeight();
	});

	if(totalHeight > $scrollBody.height()){
	  $nano.nanoScroller({ preventPageScrolling: true });

		$nano.bind("scrollend", function(){
		  	$newArticleButton.show().insertBefore($scrollList);
		});

		$newArticleButton.on('click', function(e){
			e.preventDefault();
			$nano.nanoScroller({ scroll: 'top' });
			$newArticleButton.slideUp(100);
		});

		$nano.bind("scrolltop", function(){
		    $newArticleButton.slideUp(100);
		});

	} else {
		$nano.nanoScroller({ stop: true });
		$scrollBody.height(totalHeight);
	}

}
