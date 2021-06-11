console.clear();


function AnimatedNumber(el, value){
  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>';

  this.el = el;

  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  top.innerText = value;
  back.setAttribute('data-value', value);
  bottom.setAttribute('data-value', value);
  backBottom.setAttribute('data-value', value);

  this.update = function(val){
    if (val === this.currentValue) return
    
    if ( this.currentValue >= 0 ) {
      back.setAttribute('data-value', this.currentValue);
      bottom.setAttribute('data-value', this.currentValue);
    }
    this.currentValue = val;
    top.innerText = this.currentValue;
    backBottom.setAttribute('data-value', this.currentValue);

    this.el.classList.remove('flip');
    void this.el.offsetWidth;
    this.el.classList.add('flip');
  }
}


export function hydrate(rootEL) {
  const numberEls = rootEL.querySelectorAll('.number-container__number');
  const animatedNumbers = [...numberEls].map((el) => {
    const num = Number(el.innerText)
    return new AnimatedNumber(el, num)
  })

  let val = 5
  rootEL.querySelector('#subtract').addEventListener('click', (event) => {
    event.preventDefault();
    val--
    animatedNumbers[0].update(val)
  })
  
  rootEL.querySelector('#add').addEventListener('click', (event) => {
    event.preventDefault();
    val++
    animatedNumbers[0].update(val)
  })
}
