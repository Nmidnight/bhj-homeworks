const links = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');

tooltip.className = 'tooltip';

links.forEach(elem => {

    elem.addEventListener('click', event => {
        event.preventDefault();
        target = event.target;

        if(this.target.title === tooltip.textContent){
            tooltip.classList.toggle('tooltip_active');
        } else  tooltip.classList.add('tooltip_active')

        
        tooltip.innerText = this.target.title;
        const { bottom, left } = target.getBoundingClientRect();
        tooltip.style = `left: ${left}px; top: ${bottom}px`;
        target.insertAdjacentElement('afterEnd', tooltip);
        
    })

})