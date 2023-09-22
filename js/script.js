let buttons = document.querySelectorAll('.rateOption li');
let submitBtn = document.querySelector('.submitBtn');
let modalWrap = document.querySelector('.modalWrap');
let rate = document.querySelector('.js-rating');
let score = 0;

function removeActiveClass() {
  buttons.forEach(btn => {
    btn.classList.remove('active')
  })
}

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    removeActiveClass()
    this.classList.add('active');
    score = this.dataset.score
  })
})

submitBtn.addEventListener('click', function(){
  console.log('score ' + score);
  if (score == 0) {
    alert('please select a rating')
  } else {
    rate.innerHTML = score;
    modalWrap.classList.add('show')
  }
})