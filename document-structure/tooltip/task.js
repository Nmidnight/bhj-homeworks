const links = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');

tooltip.className = 'tooltip';

links.forEach(elem => {

    elem.addEventListener('click', event => {
        event.preventDefault();
        target = event.target;

        if(target.title === tooltip.innerText){
            tooltip.classList.toggle('tooltip_active');
        };
        
        tooltip.innerText = target.title;
        const { bottom, left } = target.getBoundingClientRect();
        tooltip.style = `left: ${left}px; top: ${bottom}px`;
        target.insertAdjacentElement('afterEnd', tooltip);
        tooltip.classList.add('tooltip_active');
    })

})