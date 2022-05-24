const animation = () => {
    const imgVictoryAnimation = document.querySelectorAll('.js--animation-img');
    window.addEventListener('scroll', (e) => {
            const windowScroll = window.scrollY;
            console.log('windowScroll', windowScroll);
            imgVictoryAnimation.forEach(value => {
                const pointElement = value.offsetParent.offsetTop - window.innerHeight;
                if (pointElement < windowScroll) {
                    value.classList.add('is-active');
                };
            });
    });
    const weBenefitBlock = document.querySelectorAll('.js--we-benefit-block');

    weBenefitBlock.forEach((element, index) => {
        element.addEventListener('mousemove', (e) => {
            const img = weBenefitBlock[index].querySelector('.js--we-benefit-img');
            img.classList.add('is-active');
            setTimeout(() => {
                img.style.top = `${e.offsetY}px`;
                img.style.left = `${e.offsetX}px`;
            }, 200)
            element.addEventListener('mouseout', (e) => {
                img.classList.remove('is-active');
            })
        });

    })
};

export default animation;