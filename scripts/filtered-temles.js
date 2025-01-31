const current_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

const today = new Date();

current_year.innerHTML = `<span>${today.getFullYear()}</span>`;
last_modified.innerHTML = `<span class="highlight">Last Modification: ${document.lastModified}</span>`

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2010, August, 29",
      area: 22184,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-temple-lds-774302-wallpaper.jpg"
    },
    {
      templeName: "Freiberg Germany",
      location: "Freiberg, Germany",
      dedicated: "1985, June, 29-30",
      area: 21500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/400x250/freiberg-germany-temple-lds-664670-wallpaper.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, August, 28-30",
      area: 32895,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-lds-82734-wallpaper.jpg"
    },
  ];

function filterTemples(category) {
    let filteredTemples = [];
    switch (category) {
        case "old":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
            document.querySelector("#heading").textContent = "Old";
            break;
        case "new":
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
            document.querySelector("#heading").textContent = "New";
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            document.querySelector("#heading").textContent = "Large";
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            document.querySelector("#heading").textContent = "Small";
            break;
        default:
            filteredTemples = temples;
            document.querySelector("#heading").textContent = "Home";
    }
    displayTemples(filteredTemples);
}

function displayTemples(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = filteredTemples.map((temple) => (
        `<div class="card">
            <h3>${temple.templeName}</h3>
            <ul class="info">
                <li><span class="label">Location:</span> ${temple.location}</li>
                <li><span class="label">Dedicated:</span> ${temple.dedicated}</li>
                <li><span class="label">Size:</span> ${temple.area} sq ft</li>
            </ul>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        </div>`
    )).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#nav-home").addEventListener("click", () => filterTemples("home"));
    document.querySelector("#nav-old").addEventListener("click", () => filterTemples("old"));
    document.querySelector("#nav-new").addEventListener("click", () => filterTemples("new"));
    document.querySelector("#nav-large").addEventListener("click", () => filterTemples("large"));
    document.querySelector("#nav-small").addEventListener("click", () => filterTemples("small"));

    displayTemples(temples);
});
