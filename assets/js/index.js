/*==================== ACCORDION accordions ====================*/
const accordionsContent = document.getElementsByClassName('accordions__content'),
  accordionsHeader = document.querySelectorAll('.accordions__header');

function toggleaccordions() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < accordionsContent.length; i++) {
    accordionsContent[i].className = 'accordions__content accordions__close';
  }

  if (itemClass === 'accordions__content accordions__close') {
    this.parentNode.className = 'accordions__content accordions__open';
  }
}

accordionsHeader.forEach((el) => {
  el.addEventListener('click', toggleaccordions);
})