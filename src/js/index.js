(function () {
    const overlayTitle = document.querySelector('.overlay-title');
    const overlaySubtitle = document.querySelector('.overlay-subtitle');
    const overlay = document.querySelector('.overlay');
    const circleWrapper = document.querySelector('.circle-wrapper');
    const indicators = gsap.utils.toArray('.circle-wrapper-label');
    const circleOne = document.querySelector('.circle-one');
    const circleTwo = document.querySelector('.circle-two');
    const title = document.querySelector('.title');
    const watchWrapper = document.querySelector('.watch-wrapper');
    const socialIcons = gsap.utils.toArray('.social-icon');
    const navigationItems = gsap.utils.toArray('.navigation-item');

    gsap.to(overlayTitle, {
        y: '-=200',
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.in'
    })
    gsap.to(overlaySubtitle, {
        y: '-=200',
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.in'
    })
    gsap.to(overlay, {
        height: '0px',
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    })
    gsap.to(circleWrapper, {
        duration: 1,
        delay: 1.8,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power2.out'
    })
    gsap.to(circleOne, {
        duration: 1,
        delay: 2.8,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power2.out'
    })
    gsap.to(indicators, {
        duration: 1,
        delay: 3.8,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power2.out'
    })
    gsap.to(circleTwo, {
        duration: 0.5,
        delay: 4.8,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power2.out'
    })
    gsap.from(title, {
        x: '+100%',
        autoAlpha: 0,
        duration: 1,
        delay: 5.3,
        ease: 'power2.out'
    })
    gsap.from(watchWrapper, {
        x: '+100%',
        autoAlpha: 0,
        duration: 1,
        delay: 5.3,
        ease: 'power2.out'
    })
    gsap.from(socialIcons, {
        stagger: 0.3,
        autoAlpha: 0,
        x: '100%',
        duration: 1,
        ease: 'power2.out',
        delay: 7
    })
    gsap.from(navigationItems, {
        stagger: 0.3,
        autoAlpha: 0,
        x: '-100%',
        duration: 1,
        ease: 'power2.out',
        delay: 7
    })
})();