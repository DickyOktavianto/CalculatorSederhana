// calculator

let button = document.querySelector('button');
let btn = document.querySelector('span');
let value = document.querySelector('value');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    if (this.innerHTML == '=') {
      value = innerHTML = eval(value.innerHTML);
    } else {
      if (this.innerHTML == 'clear') {
        value = this.innerHTML = '';
      } else {
        value.innerHTML == this.innerHTML;
      }
    }
  });
}
