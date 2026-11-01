/* Bootstrap owns Collapse, Dropdown, Tab, Carousel, Accordion and ScrollSpy. */
'use strict';

const searchForm = document.getElementById('property-search');
const propertyColumns = [...document.querySelectorAll('.property-column')];
const searchStatus = document.getElementById('search-status');

function resetProperties() {
  searchForm.reset();
  propertyColumns.forEach(column => column.classList.remove('d-none'));
  searchStatus.classList.add('d-none');
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const location = searchForm.elements.location.value.trim().toLowerCase();
  const type = document.getElementById('property-type').value;
  const priceIndex = document.getElementById('price-range').selectedIndex;
  const priceBounds = [[0, Infinity], [0, 500000], [500000, 1000000], [1000000, 2000000], [2000000, Infinity]][priceIndex];
  const minBeds = parseFloat(document.getElementById('bedrooms').value) || 0;
  const minBaths = parseFloat(document.getElementById('bathrooms').value) || 0;
  const minArea = Number(document.getElementById('min-area').value) || 0;
  const maxArea = Number(document.getElementById('max-area').value) || Infinity;
  const maxAreaInput = document.getElementById('max-area');
  maxAreaInput.setCustomValidity(maxArea < minArea ? 'Maximum area must be greater than or equal to minimum area.' : '');
  if (!searchForm.reportValidity()) return;
  let count = 0;
  propertyColumns.forEach(column => {
    const property = column.dataset;
    const matches = property.search.toLowerCase().includes(location)
      && (type === 'All Types' || type === property.propertyType)
      && Number(property.price) >= priceBounds[0] && Number(property.price) <= priceBounds[1]
      && Number(property.beds) >= minBeds && Number(property.baths) >= minBaths
      && Number(property.area) >= minArea && Number(property.area) <= maxArea;
    column.classList.toggle('d-none', !matches);
    if (matches) count++;
  });
  searchStatus.textContent = count ? `${count} featured ${count === 1 ? 'property matches' : 'properties match'} your search.` : 'No featured properties match your search. Try adjusting your filters or view all properties.';
  searchStatus.classList.remove('d-none');
  document.getElementById('featured-properties').scrollIntoView({behavior: 'smooth'});
});

['min-area', 'max-area'].forEach(id => document.getElementById(id).addEventListener('input', () => document.getElementById('max-area').setCustomValidity('')));
document.getElementById('view-all-properties').addEventListener('click', () => {
  resetProperties();
  document.querySelector('.property-grid').scrollIntoView({behavior: 'smooth', block: 'center'});
});

document.querySelectorAll('.favorite-button').forEach(button => {
  button.addEventListener('click', () => {
    const isSaved = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(isSaved));
    const name = button.closest('.property-card').querySelector('.property-title').textContent;
    button.setAttribute('aria-label', `${isSaved ? 'Unsave' : 'Save'} ${name}`);
  });
});

document.querySelectorAll('.tour-button').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('interest').value = 'Buying a home';
    document.getElementById('message').value = `I'd like to schedule a tour of ${button.dataset.property}.`;
    document.getElementById('contact-form').scrollIntoView({behavior: 'smooth', block: 'center'});
    document.getElementById('first-name').focus({preventScroll: true});
  });
});

document.querySelectorAll('#mobile-navigation a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => bootstrap.Collapse.getOrCreateInstance(document.getElementById('mobile-navigation'), {toggle: false}).hide());
});

document.querySelectorAll('.mega-menu a').forEach(link => {
  link.addEventListener('click', () => bootstrap.Dropdown.getOrCreateInstance(document.querySelector('.properties-dropdown > button')).hide());
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const status = document.getElementById('contact-status');
  status.textContent = 'To send your inquiry, please email info@elitehomes.com. This form does not send messages.';
  status.classList.remove('d-none');
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  bootstrap.Carousel.getOrCreateInstance(document.getElementById('testimonial-carousel')).pause();
}
