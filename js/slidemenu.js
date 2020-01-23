  
$(function(){
	
    //.accordion2の中のp要素がクリックされたら
	$('.dropmenu .upperMenu').click(function(){
 
		//クリックされた.dropmenuの中の.upperMenuに内封するul要素の中のliを開いたり閉じたりする。
		$(this).children('.upperMenu ul').slideToggle();
 
		//クリックされた.dropmenuの中の.upperMenu以外の.upperMenuに内封するul要素の中のliを閉じる
		$('.dropmenu .upperMenu').not($(this)).children('.upperMenu ul').slideUp();
 
	});
});