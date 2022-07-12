new fullpage(
    '#wrap', {
    autoScrolling:true,
    // 아래 두개는 페이지 숫자 알려주는
    anchors:['1page','2page','3page','4page'],
    navigationTooltips:['Home','About','Portfolio','Contact'],
    navigation:true
    }
);

function Fullpage__init() {
const $current = $('#wrap .section .fp-section .active');
  $current.removeClass('active');
  setTimeout(function() {
    $current.addClass('active');
});
}
Fullpage__init();

anime({
    targets: '.skill .per',
    borderRadius:50
});
anime({
    targets: '.skill .per1',
    width: '60%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per2',
    width: '50%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per3',
    width: '55%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per4',
    width: '50%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per5',
    width: '20%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per6',
    width: '30%',
    easing: 'easeInOutQuad',
    duration:3000
});