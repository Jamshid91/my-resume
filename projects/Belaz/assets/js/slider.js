window.onload = function () {

  let layer = document.querySelectorAll('.layer');
  let y = 0;
  let i = 0;
  document.querySelector('.jlhenmann').onmousewheel = function (event) {
    event = event || window.event

    y = y + Math.round(event.deltaY);

    layer[i].style.top = -(y * 0.1) + 'px';

    if (y * 0.1 >= 400) {
      i++
      y = 0

      if (i == layer.length - 1) {
        document.querySelector('.slider').onmousewheel = null;
      }
    }
    return true
  }
}