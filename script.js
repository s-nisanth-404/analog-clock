const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const timeUpdater = () => {
  const sec = new Date().getSeconds();
  const secDeg = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  const min = new Date().getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = new Date().getHours();
  const hourDeg = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(timeUpdater, 1000);
