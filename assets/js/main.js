gsap.from('.opacity-round-border',{
    opacity: 0,
    duration : 1, 
    delay : 1
})
gsap.from('.round-border',{
    opacity: 0,
    duration : 1,
    delay : 1 
})
gsap.from('.round-box',{
    opacity: 0,
    duration : 1,
    delay : 2 
})

gsap.from('.head-text',{
    opacity: 0,
    duration : 2,
    delay  : 2,
    y : -50
})
gsap.from('.main-text',{
    opacity: 0,
    duration : 2,
    delay  : 2,
    y : -40
})
gsap.from('.text',{
    opacity: 0,
    duration : 2,
    delay  : 2,
    y : 40
})
gsap.from('.round-box-logo',{
    opacity: 0,
    duration : 2,
    delay  : 2,
    y : 50
})
gsap.from('.section-head h3',{
    opacity: 0,
    duration : 1,
    y : -70,
    scrollTrigger  :{
        trigger : '.section-head h3',
        scrub : true
    }
})
gsap.from('.section-head h3 span',{
    opacity: 0,
    duration : 1,
    y : -40,
    scrollTrigger  :{
        trigger : '.section-head h3 span',
        scrub : true,
        start : 'top 90%',
        end : 'top 75%'
    }
})
gsap.from('.card',{
    opacity: 0,
    duration : 1,
    y : 70,
    scrollTrigger  :{
        trigger : '.card',
        scrub : true,
        start : 'top 90%',
        end : 'top 75%'
    }
})