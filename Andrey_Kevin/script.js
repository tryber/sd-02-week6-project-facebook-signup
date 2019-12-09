
const wrapper = document.querySelector('.wrapper');

['focus'].forEach(eventName => {
  dateInput.addEventListener(eventName, () => {
    wrapper.style.display = 'block';
  });
});

document.querySelector('body').addEventListener('click', (e) => {
  if(e.target.closest('.wrapper') || e.target.closest('.date-item')) {
    wrapper.style.display = 'none';
  }
});

