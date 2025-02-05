const current_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

const today = new Date();
if (current_year && last_modified) {
current_year.innerHTML = `<span>${today.getFullYear()}</span>`;
last_modified.innerHTML = `<span class="highlight">Last Modification: ${document.lastModified}</span>`;
}

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const select = document.querySelector("#productName");
if (select) {
select.innerHTML = `
    <option value="" disabled selected>Select a Product ...</option>
        ${products.map(product => `<option value="${product.id}">${product.name}</option>`).join("")}
    `;
}

function getReviewCounter() {
    return parseInt(localStorage.getItem("reviewCounter")) || 0;
}

function setReviewCounter(counter) {
    localStorage.setItem("reviewCounter", counter);
}

let reviewCounter = getReviewCounter();

const reviewForm = document.querySelector(".form");
if (reviewForm) {
    reviewForm.addEventListener("submit", () => {
        reviewCounter = getReviewCounter() + 1;
        setReviewCounter(reviewCounter);
    });
}

const counterMessage = document.getElementById("counterMessage");
if (counterMessage) {
    counterMessage.textContent = `You have submitted ${reviewCounter} reviews so far.`;
}