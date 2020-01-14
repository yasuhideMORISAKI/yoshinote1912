var mediaQuery = matchMedia('(min-width: 1027px)');

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズが変更されても実行されるように
mediaQuery.addListener(handle);

function handle(mq) {
  if (mq.matches) {
  	// ウィンドウサイズが1027px以上のとき
    $(function(){
  function initFontSize() {
    var size = (sessionStorage.getItem('fontSize'))? sessionStorage.getItem('fontSize') : '16';
    changeFontSize(size);
  }
  
  function changeFontSize(size){
    $('html').css('font-size', size + 'px');
    $('[data-font!=' + size + ']').removeClass('active');
    $('[data-font=' + size + ']').addClass('active');
    sessionStorage.setItem('fontSize', size);
  }
  
  function addListeners() {
    $('[data-font]').on('click', function(){
      changeFontSize($(this).data('font'));
    });
  }
  
  function init() {
    initFontSize();
    addListeners();
  }
  
  init();
});
  } else {
    // それ以外
  }
}