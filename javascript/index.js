function updateTime() {
  //Los Angles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let currentLosAngelesElement = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML =
      currentLosAngelesElement.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = currentLosAngelesElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let currentParisElement = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = currentParisElement.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = currentParisElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let currentCairoElement = moment().tz("Africa/Cairo");
    cairoDateElement.innerHTML = currentCairoElement.format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = currentCairoElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let currentTokyoElement = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = currentTokyoElement.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = currentTokyoElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
         <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
          <a href="/">⬅️ Back to all cities</a>
`;
}
updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
