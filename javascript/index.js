function updateTime() {
  //Los Angles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let currentLosAngelesElement = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML =
    currentLosAngelesElement.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = currentLosAngelesElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let currentParisElement = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = currentParisElement.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = currentParisElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
