new fullpage(
    '#wrap', {
    anchors:['1page','2page','3page','4page'],
    navigation:true
    }
);




// 1page
anime({
    targets:'#home p',
    translateY:[-25,10],
    // opacity:anime.stagger(0),
    delay:anime.stagger(50),
    direction:'alternate',
    easing: 'easeInExpo',
    duration:500,
    loop:true
})

// 2page 
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