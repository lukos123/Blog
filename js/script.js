jQuery(document).ready(function(){
	jQuery('.sub .p1').on('click' , function(){
		jQuery('.header__submenu').toggleClass('active');
		
	});
	jQuery('.header__LearningApps p').on('click' , function(){
		jQuery('.LearningApps').toggleClass('active');
		
	});
	jQuery('.header__GoogleForms p').on('click' , function(){
		jQuery('.GoogleForms').toggleClass('active');
		
	});
	jQuery('.header__Project p').on('click' , function(){
		jQuery('.Project').toggleClass('active');
		
	});


});