function openSubmenu(event){
	var target = $(event.target);
	var parentWidth = target.parent().width();
	var submenu2 = target.parent().next('.submenu2');
	if(submenu2.css('visibility') == 'hidden'){
		 submenu2.css({
        'display':'block',
		'visibility':'visible',
		'left':parentWidth
		});
	}else{
		 submenu2.css({
        'display':'block',
		'visibility':'hidden'
    });
	}
	
}