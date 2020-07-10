(function () {
    const overlayTitle = document.querySelector('.overlay-title');
    const overlaySubtitle = document.querySelector('.overlay-subtitle');
    const overlay = document.querySelector('.overlay');
    const indicators = gsap.utils.toArray('.circle-wrapper-label');

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
    gsap.to(indicators, {
        duration: 1,
        delay: 1.8,
        autoAlpha: 1,
        stagger: 0.5,
        ease: 'power2.out'
    })

})();