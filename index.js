const btn = document.getElementById('btn');
const rate = document.getElementById('ratePopUp');
const thanks = document.getElementById('thankYouPopUp');
const thanksContent= document.querySelector('.selected-rate span');

const rates = document.querySelectorAll('.rates > div');

btn.addEventListener('click', function() {
    rate.style.display = 'none';
    thanks.style.display = 'block';
});

rates.forEach(rate => {
    rate.addEventListener('click', function() {
      // Remove the "active" class from all boxes
      rates.forEach(rate => {
        rate.classList.remove('choosen');
      });
    
      // Add the "active" class to the clicked box
      this.classList.add('choosen');

      // Get the number inside the clicked box
        const rateNumber = this.querySelector('p').innerText;
    
        // Display the number in the opened div
        thanksContent.innerText = rateNumber;
    });
  });