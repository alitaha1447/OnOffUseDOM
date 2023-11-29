
let btn_on = document.querySelector(".btn-on");
btn_on.addEventListener("click", function () {
  document.getElementById('bulb-off').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png'
  document.getElementById('cat-off').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png'
  console.log('hi')
  document.querySelector('.switch_1').innerHTML = 'Switched On'
  btn_on.classList.add('green')
  btn_off.classList.remove('red')

});

let btn_off = document.querySelector(".btn-off");
btn_off.classList.add('red');
btn_off.addEventListener("click", function () {
  document.getElementById('bulb-off').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png'
  document.getElementById('cat-off').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png'
  console.log('hi')
  document.querySelector('.switch_1').innerHTML = 'Switched Off'
  btn_on.classList.remove('green')
  btn_off.classList.add('red')
});
