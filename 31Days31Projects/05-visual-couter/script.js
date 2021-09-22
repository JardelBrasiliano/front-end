const counters = document.querySelectorAll('.counter');

counters.forEach(couter => {
  couter.innerTexts = '0';

  const updateCounter = () => {
    const target = +couter.getAttribute('data-target');

    const c = +couter.innerText;

    const increment = Math.random() * 100;

    if(c < target) {
      couter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 1);
    }else {
      couter.innerText = target;
    }
  }

  updateCounter();
});