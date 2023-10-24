// document.addEventListener('mousemove', e => {
//     Object.assign(document.documentElement, {
//         style: `
//         --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
//         --move-y: ${(e.clientY - window.innerHeight / 2) * -.002}deg;
//         `
//     })
// })

/* ............................ */
let isAnimationActive = true;
function enableAnimation() {
  isAnimationActive = true;
  document.addEventListener('mousemove', handleMouseMove);
}

function disableAnimation() {
  isAnimationActive = false;
  document.removeEventListener('mousemove', handleMouseMove);
}

function handleMouseMove(e) {
  if (isAnimationActive) {
    Object.assign(document.documentElement, {
      style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -0.003}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.002}deg;
      `
    });
  }
}

enableAnimation();

window.addEventListener('scroll', () => {
  const element = document.getElementById('element');
  const rect = element.getBoundingClientRect();
  
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    enableAnimation();
  } else {
    disableAnimation();
  }
});
