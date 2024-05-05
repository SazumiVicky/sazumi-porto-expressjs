/*
* dev: Viki
* ig: @moe.sazumiviki
* gh: github.com/sazumivicky
* site: www.sazumiviki
*/

document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        let skillLevel = bar.getAttribute('data-skill');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = skillLevel + '%';
        }, 100);
    });

    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});