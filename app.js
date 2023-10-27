const secondsHandle = document.querySelector(".handle__second");
const minutesHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

setInterval(() => {
  setHandles();
}, 1000);

function setHandles() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();


  const extraMinutesAngle = seconds * 0.1
  const minutesAngle = minutes * 6 + extraMinutesAngle

  const extraHoursAngle = minutes * 0.5
  const hoursAngle = hours * 30 + extraHoursAngle

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;

  minutesHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;

  secondsHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}
