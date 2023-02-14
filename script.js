function yesClick() {
  alert("Hẹn bà tối mai nhaaa =)))");
}

function noHover(x) {
  var a = Math.floor(Math.random() * window.innerWidth);
  var b = Math.floor(Math.random() * window.innerHeight);
  if (a >= 1350) {
    x.style.left = a - 1300 + "px";
  } else {
    x.style.left = a + "px";
  }
  if (b >= 470) {
    x.style.top = b - 470 + "px";
  } else {
    x.style.top = b + "px";
  }
}
