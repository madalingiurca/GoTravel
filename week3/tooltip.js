const tooltipElements = document.querySelectorAll('[data-tooltip]');

tooltipElements.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    console.log(event);
    const tooltip = document.createElement("div");
    tooltip.textContent = element.dataset.tooltip;
    tooltip.id = "tooltip";

    tooltip.style.background = 'grey';
    tooltip.style.padding = '4px 80px';
    tooltip.style.color = 'white';
    tooltip.style.position = 'absolute';

    const elementBounds = element.getBoundingClientRect();

    document.body.appendChild(tooltip)

    tooltip.syle.top = elementBounds.top - tooltip.offsetHeight + 'px';
  });

  element.addEventListener('mouseout', (event) => {
    const tooltip = document.getElementById('tooltip');
    tooltip.remove();
  })
});
