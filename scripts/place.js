const current_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

const today = new Date();

current_year.innerHTML = `<span>${today.getFullYear()}</span>`;
last_modified.innerHTML = `<span class="highlight">Last Modification: ${document.lastModified}</span>`;

const windChillEl = document.getElementById("windChill");
let temperature = 10;
windSpeed = 13;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);

windChillEl.innerHTML = `<span>${windChill.toFixed(2)}</span>`;